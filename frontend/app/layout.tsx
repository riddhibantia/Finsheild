import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinShield — Multi-Signal Fraud Defense Platform",
  description:
    "Real-time fraud defense: XGBoost + 5-signal risk fusion, SHAP explainability, entity graph forensics, and an AI investigation copilot.",
  icons: { icon: "/favicon.svg?v=2" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..800;1,14..32,300..800&family=JetBrains+Mono:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
