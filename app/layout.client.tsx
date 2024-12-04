'use client';

import { type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { cn } from '@/utils/cn';

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  const { slug } = useParams();
  const mode = Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
  return <body className={cn(mode, 'relative flex min-h-screen w-screen overflow-x-hidden flex-col bg-background font-sans tracking-tight antialiased')}>{children}</body>;
}
