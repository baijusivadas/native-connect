import { Metadata } from "next";
import TermsView from "./TermsView";

export const metadata: Metadata = {
  title: "Terms of Service & Refund Policy | Native Connects",
  description:
    "Official Course Terms, Student Code of Conduct, Refund & Cancellation Policy, and Grievance Resolution for Native Connects.",
};

export default function TermsPage() {
  return <TermsView />;
}
