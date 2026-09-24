import { CommandCenter } from "@/components/site";

// Reads window.location at render (webhook URL box) — render on demand, not at build.
export const dynamic = "force-dynamic";

export default function CommandCenterPage() {
  return <CommandCenter />;
}
