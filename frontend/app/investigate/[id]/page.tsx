import type { Metadata } from "next";
import { Investigation } from "@/components/site";

export const metadata: Metadata = {
  title: "Forensic Investigation",
  description:
    "Deep-dive a flagged payment: 5-signal radar, SHAP attribution, AI copilot, and entity graph.",
};

export default function InvestigatePage() {
  return <Investigation />;
}
