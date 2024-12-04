import { PageIllustration } from "@/components/ui";
import Header from "@/components/landing-page/header";
import { Fragment } from "react";

export default function AuthLayout({ children }: RFCProps) {
  return (
    <Fragment>
      <Header />
      <main className="grow">
        <PageIllustration />
        {children}
      </main>
    </Fragment>
  );
}
