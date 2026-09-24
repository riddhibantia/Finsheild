import type { Metadata } from "next";
import { Privacy } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacy & Identity Tokenization",
  description:
    "Salted SHA-256 identity tokenization: how personal data never reaches the model.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
