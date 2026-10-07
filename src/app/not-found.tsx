import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] px-6 py-20 text-[#0b192c]">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#9b1c31]">
          Native Connects
        </p>
        <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl">404</h1>
        <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
          Page not found
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-[#0b192c]/65">
          The page you are looking for may have moved or no longer exists.
          Explore our courses or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#0b192c] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Go to homepage
          </Link>
          <Link
            href="/german-for-nurses"
            className="rounded-full border border-[#0b192c]/20 px-6 py-3 font-semibold transition hover:bg-white"
          >
            German for Nurses
          </Link>
        </div>
      </div>
    </main>
  );
}
