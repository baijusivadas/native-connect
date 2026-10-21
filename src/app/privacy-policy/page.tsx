import { Metadata } from "next";
import PrivacyPolicyView from "./PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Native Connects",
  description:
    "Official privacy policy, data protection standards, grievance officer details, and legal information for Native Connects.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
