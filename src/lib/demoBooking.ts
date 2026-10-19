const CALENDLY_API_URL = "https://api.calendly.com/event_type_available_times";
const TIME_ZONE = "Asia/Kolkata";

type CalendlyAvailableTime = {
  status?: string;
  invitees_remaining?: number;
  start_time?: string;
};

type DemoBooking = {
  startTime: string;
  meetingLink: string | null;
};

type DemoBookingConfig = {
  calendlyAccessToken: string;
  calendlyEventTypeUri: string;
};

export class DemoBookingError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

const recentBookings = new Map<
  string,
  { startTime: string; meetingLink: string | null; expiresAt: number }
>();

function cleanRecentBookings() {
  const now = Date.now();
  for (const [key, val] of recentBookings.entries()) {
    if (now >= val.expiresAt) recentBookings.delete(key);
  }
}

function getConfig(): DemoBookingConfig {
  const { CALENDLY_ACCESS_TOKEN, CALENDLY_EVENT_TYPE_URI } = process.env;

  if (!CALENDLY_ACCESS_TOKEN || !CALENDLY_EVENT_TYPE_URI) {
    throw new DemoBookingError(
      "Automatic demo booking is not configured yet. Please contact us to arrange a session.",
      503,
    );
  }

  let eventTypeUrl: URL;
  try {
    eventTypeUrl = new URL(CALENDLY_EVENT_TYPE_URI);
  } catch {
    throw new DemoBookingError(
      "Automatic demo booking is not configured yet. Please contact us to arrange a session.",
      503,
    );
  }
  if (
    eventTypeUrl.protocol !== "https:" ||
    eventTypeUrl.hostname !== "api.calendly.com" ||
    !/^\/event_types\/[A-Za-z0-9-]+$/.test(eventTypeUrl.pathname)
  ) {
    throw new DemoBookingError(
      "Automatic demo booking is not configured yet. Please contact us to arrange a session.",
      503,
    );
  }

  return {
    calendlyAccessToken: CALENDLY_ACCESS_TOKEN,
    calendlyEventTypeUri: eventTypeUrl.toString(),
  };
}

async function getNextAvailableTime(
  config: DemoBookingConfig,
): Promise<string> {
  // Start with 5 minutes buffer so start_time is always strictly in the future for Calendly
  const start = new Date(Date.now() + 5 * 60 * 1000);
  const end = new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
  const url = new URL(CALENDLY_API_URL);
  url.searchParams.set("event_type", config.calendlyEventTypeUri);
  url.searchParams.set("start_time", start.toISOString());
  url.searchParams.set("end_time", end.toISOString());

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${config.calendlyAccessToken}` },
    signal: AbortSignal.timeout(10_000),
  });
  const result = (await response.json()) as {
    collection?: CalendlyAvailableTime[];
  };

  if (!response.ok) {
    throw new DemoBookingError(
      response.status === 401 || response.status === 403 || response.status === 404
        ? "Automatic demo booking is not configured yet. Please contact us to arrange a session."
        : "We could not check demo availability. Please try again later.",
      response.status === 401 || response.status === 403 || response.status === 404
        ? 503
        : 502,
    );
  }

  const nextTime = result.collection
    ?.filter(
      (slot) =>
        slot.status === "available" &&
        (slot.invitees_remaining ?? 0) > 0 &&
        typeof slot.start_time === "string" &&
        Number.isFinite(Date.parse(slot.start_time)) &&
        Date.parse(slot.start_time) > Date.now(),
    )
    .sort(
      (left, right) =>
        Date.parse(left.start_time!) - Date.parse(right.start_time!),
    )[0]?.start_time;

  if (!nextTime) {
    throw new DemoBookingError(
      "There are no demo times available in the next 30 days. Please contact us to arrange a session.",
      409,
    );
  }

  return new Date(nextTime).toISOString();
}

export async function bookNextDemo(input: {
  name: string;
  email: string;
  language: string;
  goal: string;
  idempotencyKey: string;
}): Promise<DemoBooking> {
  const config = getConfig();

  cleanRecentBookings();
  const cacheKey = `${input.email.toLowerCase()}:${input.idempotencyKey}`;
  const existingCached = recentBookings.get(cacheKey);
  if (existingCached) {
    return {
      startTime: existingCached.startTime,
      meetingLink: existingCached.meetingLink,
    };
  }

  const startTime = await getNextAvailableTime(config);

  // Direct booking via Calendly's official API
  // This automatically syncs to Google Calendar, creates Google Meet, and sends invitation emails to student & host
  try {
    const inviteeResponse = await fetch("https://api.calendly.com/invitees", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.calendlyAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_type: config.calendlyEventTypeUri,
        start_time: startTime,
        invitee: {
          name: input.name,
          email: input.email,
          timezone: TIME_ZONE,
        },
        location: {
          kind: "google_conference",
        },
        questions_and_answers: [
          {
            position: 0,
            question: "Please share anything that will help prepare for our meeting.",
            answer: [
              input.language ? `Language: ${input.language}` : "",
              input.goal ? `Learning goal: ${input.goal}` : "",
            ]
              .filter(Boolean)
              .join(" | "),
          },
        ],
      }),
      signal: AbortSignal.timeout(15_000),
    });

    const inviteeResult = (await inviteeResponse.json()) as {
      resource?: {
        event?: string;
        uri?: string;
      };
      message?: string;
    };

    if (inviteeResponse.ok && inviteeResult.resource?.event) {
      let meetingLink: string | null = null;
      try {
        const eventRes = await fetch(inviteeResult.resource.event, {
          headers: { Authorization: `Bearer ${config.calendlyAccessToken}` },
          signal: AbortSignal.timeout(10_000),
        });
        if (eventRes.ok) {
          const eventData = (await eventRes.json()) as {
            resource?: {
              location?: { join_url?: string };
            };
          };
          meetingLink = eventData.resource?.location?.join_url ?? null;
        }
      } catch {
        // Fall back to direct link format if event inspection times out
      }

      if (!meetingLink) {
        const eventUuid = inviteeResult.resource.event.split("/").pop();
        if (eventUuid) {
          meetingLink = `https://calendly.com/events/${eventUuid}/google_meet`;
        }
      }

      const booking: DemoBooking = {
        startTime,
        meetingLink,
      };

      recentBookings.set(cacheKey, {
        ...booking,
        expiresAt: Date.now() + 30 * 60 * 1000,
      });

      return booking;
    }

    console.warn("Calendly invitee creation returned non-OK:", inviteeResponse.status, inviteeResult);
  } catch (calendlyErr) {
    console.warn("Calendly invitee booking error:", calendlyErr);
  }

  throw new DemoBookingError(
    "We could not create the meeting and calendar invitations. Please try again later.",
    502,
  );
}
