import Features from '@/components/landing-page/home/feature';
import Hero from '@/components/landing-page/home/hero';
import Showcase from '@/components/landing-page/home/showcase';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'About | PearAi',
  canonical: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
    </>
  );
}
