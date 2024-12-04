'use client';

import type { ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { RootProvider } from 'fumadocs-ui/provider';

const inject = `
const urlParams = new URLSearchParams(window.location.search);
const uwuParam = urlParams.get("uwu");

if (typeof uwuParam === 'string') {
    localStorage.setItem('uwu', uwuParam);
}

const item = localStorage.getItem('uwu')

if (item === 'true') {
    document.documentElement.classList.add("uwu")
}
`;

export default function FumadocsProvider({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <RootProvider>
      <TooltipProvider>
        <script suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: inject }} />
        {children}
      </TooltipProvider>
    </RootProvider>
  );
}
