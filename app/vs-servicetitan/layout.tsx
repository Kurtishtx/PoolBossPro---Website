import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PoolBossPro vs ServiceTitan | PoolBossPro',
  description: 'PoolBossPro vs ServiceTitan: lighter pricing, faster setup, and spray-route-native scheduling built for lawn care and pest control — not enterprise HVAC.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}