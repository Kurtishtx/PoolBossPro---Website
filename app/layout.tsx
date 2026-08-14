import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import DemoPopup from "./components/DemoPopup";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoolBossPro | Pool Service & Pool Route Software",
  description: "PoolBossPro is pool service software built by people who have run real pool routes — recurring scheduling, water-chemistry logging, route mapping, automated SMS, and Stripe billing. $99/month, everything included.",
  /* Google's search results still show Vercel's default triangle for this domain, cached from
     before the crown existed. The files themselves have been correct for a month — /favicon.ico
     contains the crown at 16, 32 and 48px — but Google has no reason to refetch a URL it already
     has, so the stale copy just sits there.

     Versioning the URLs gives it something it has never seen. Paired with Request Indexing in
     Search Console, that is what actually breaks the cache; waiting does not. */
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
};


const structuredData = {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://poolbosspro.com/#organization","name":"PoolBossPro","url":"https://poolbosspro.com","logo":"https://poolbosspro.com/icon.svg","description":"Pool service software with recurring route scheduling, water-chemistry logging, route mapping, automated SMS, and Stripe billing."},{"@type":"WebSite","@id":"https://poolbosspro.com/#website","url":"https://poolbosspro.com","name":"PoolBossPro","publisher":{"@id":"https://poolbosspro.com/#organization"}},{"@type":"SoftwareApplication","name":"PoolBossPro","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","description":"Pool service software with recurring route scheduling, water-chemistry logging, route mapping, automated SMS, and Stripe billing.","offers":{"@type":"Offer","price":"99","priceCurrency":"USD","description":"$99/month flat — everything included, 14-day free trial."},"publisher":{"@id":"https://poolbosspro.com/#organization"}}]};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <DemoPopup />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
