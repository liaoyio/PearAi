
import Pricing from '@/components/landing-page/pricing';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Pricing',
  description: 'The pricing and download page for PearAI.',
  canonical: '/pricing',
});

export default async function PricingPage() {
  return (
    <Pricing />
  );
}
