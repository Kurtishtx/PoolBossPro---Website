import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoolBossPro | Pool Service & Pool Route Software",
  description: "PoolBossPro is pool service software built by people who have run real pool routes — recurring scheduling, water-chemistry logging, route mapping, automated SMS, and Stripe billing. $99/month, everything included.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
