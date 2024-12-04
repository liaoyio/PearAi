import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { DocsBackgroundImage } from '@/components/ui';
import { source } from '@/utils/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <DocsBackgroundImage />
      {children}
    </DocsLayout>
  );
}
