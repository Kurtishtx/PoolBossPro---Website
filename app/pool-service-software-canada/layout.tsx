import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pool Service Software for Canada | CAD Invoicing Built In — PoolBossPro',
  description: 'Pool service software that works in Canada — bill your customers in Canadian dollars, schedule openings and closings, run weekly routes in drive order, and log water chemistry on every stop. Live demo, no sales call. $99 USD/month, everything included.',
  alternates: { canonical: 'https://poolbosspro.com/pool-service-software-canada' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
