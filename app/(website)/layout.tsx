import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import Footer from '@/components/landing-page/footer';

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      <main className="grow">{children}</main>
      <Footer />
    </HomeLayout>
  );
}
