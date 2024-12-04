import type { ReactNode } from 'react';
import { Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { FumadocsProvider } from '@/components/providers';
import { createMetadata } from '@/utils/metadata';
import '@/styles/global.css';
import { Body } from './layout.client';

export const metadata = createMetadata({
  canonical: '/',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Body>
        <FumadocsProvider>{children}</FumadocsProvider>
      </Body>
    </html>
  );
}
