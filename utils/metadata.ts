import type { Metadata } from 'next/types';
import { DefaultMetadata } from '@/utils/constants';

export type MetadataProps = Metadata & {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export function createMetadata({
  title,
  description = DefaultMetadata.DESCRIPTION,
  canonical = '/',
  ogImage = '/og-image.png',
  twitter,
}: MetadataProps): Metadata {
  return {
    metadataBase: new URL('https://trypear.ai/'),
    title: title ? `${title} - PearAI` : DefaultMetadata.TITLE,
    description,

    keywords: ['code editor', 'ai code editor', 'ai', 'pearai', 'open source code editor'],
    alternates: {
      canonical,
    },
    authors: [{ name: 'LiaoYi', url: 'https://github.com/liaoyio' }],
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'OG Image' }],
    },
    twitter: {
      title,
      description,
      creator: '@trypearai',
      site: 'trypear.ai',
      images: '/banner.png',
      card: 'summary_large_image',
      ...twitter,
    },

    // --- will add this once we get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);
