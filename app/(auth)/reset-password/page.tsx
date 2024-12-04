import { createMetadata } from "@/utils/metadata";
import ResetPassword from "@/components/auth/reset-password";

export const metadata = createMetadata({
  title: "Reset Password",
  description: "Reset your password",
  canonical: "/reset-password",
});

export default async function SignIn() {
  return (
    <>
      <ResetPassword />
    </>
  );
}
