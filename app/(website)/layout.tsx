import type { ReactNode } from 'react';
import Footer from '@/components/landing-page/footer';
import Header from '@/components/landing-page/header';

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
