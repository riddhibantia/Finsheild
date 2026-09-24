import type { Metadata } from "next";
import { Performance } from "@/components/site";

export const metadata: Metadata = {
  title: "Model Performance Observatory",
  description:
    "XGBoost ROC-AUC 0.9709 on the real ULB benchmark plus synthetic stress-test results.",
};

export default function PerformancePage() {
  return <Performance />;
}
