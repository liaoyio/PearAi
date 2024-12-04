import EmailVerification from "@/components/auth/email-verification";
import { createMetadata } from "@/utils/metadata";


export const metadata = createMetadata({
  title: "Email Verification",
  description: "verification your email",
  canonical: "/verification",
});


export default async function Verification() {
  return (
    <>
      <EmailVerification />
    </>
  );
}
