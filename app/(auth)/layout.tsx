import { PageIllustration } from "@/components/ui";
import Header from "@/components/landing-page/header";
import { Fragment } from "react";
/*

import type { ReactNode } from 'react';
import Footer from '@/components/landing-page/footer';
import Header from '@/components/landing-page/header';

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  return (

  );
}

*/

export default function AuthLayout({ children }: RFCProps) {
  return (
    <>
      <Header />
      <main className="grow max-w-screen ">
        <PageIllustration />
        {children}
      </main>
    </>
  );
}
