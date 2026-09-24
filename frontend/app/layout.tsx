import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://shieldfin-finsheild.vercel.app";
const SITE_NAME = "FinShield — Multi-Signal Fraud Defense Platform";
const SITE_DESC =
  "Real-time fraud defense for digital payments: XGBoost + 5-signal risk fusion, SHAP explainability, entity graph forensics, and an AI investigation copilot. Live interactive demo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: "%s | FinShield" },
  description: SITE_DESC,
  keywords: [
    "fraud detection",
    "XGBoost",
    "risk fusion",
    "SHAP explainability",
    "payment fraud",
    "UPI fraud",
    "entity graph",
    "Next.js",
    "FastAPI",
    "fintech",
  ],
  authors: [{ name: "Riddhi Bantia" }],
  creator: "Riddhi Bantia",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "FinShield",
    title: SITE_NAME,
    description: SITE_DESC,
    images: [{ url: "/favicon.svg", width: 64, height: 64, alt: "FinShield shield mark" }],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/favicon.svg"],
  },
  icons: { icon: "/favicon.svg?v=2" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FinShield",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  author: { "@type": "Person", name: "Riddhi Bantia" },
  description: SITE_DESC,
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
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
