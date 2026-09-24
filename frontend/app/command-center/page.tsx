import type { Metadata } from "next";
import { CommandCenter } from "@/components/site";

export const metadata: Metadata = {
  title: "Live Command Center",
  description:
    "Real-time fraud transaction stream with scenario injection, UPI simulator, and Cashfree webhook ingestion.",
};

// Reads window.location at render (webhook URL box) — render on demand, not at build.
export const dynamic = "force-dynamic";

export default function CommandCenterPage() {
  return <CommandCenter />;
}
