import type { Metadata } from "next";
import { Architecture } from "@/components/site";

export const metadata: Metadata = {
  title: "Architecture & Risk Fusion Engine",
  description:
    "How the 5-signal fusion engine, SHAP explainability, and entity graph fit together.",
};

export default function ArchitecturePage() {
  return <Architecture />;
}
