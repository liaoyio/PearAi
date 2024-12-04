import AuthCodeError from "@/components/auth/auth-error";
import { Suspense } from "react";

export default function AuthCodeErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCodeError />
    </Suspense>
  );
}
