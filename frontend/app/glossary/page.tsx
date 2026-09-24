import type { Metadata } from "next";
import { Glossary } from "@/components/site";

export const metadata: Metadata = {
  title: "Glossary — Fraud Terms in Plain English",
  description:
    "Every fraud-detection term in the app explained in one line: risk score, SHAP, velocity, mule accounts, and more.",
};

export default function GlossaryPage() {
  return <Glossary />;
}
