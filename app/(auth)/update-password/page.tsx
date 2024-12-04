import { createMetadata } from "@/utils/metadata";
import UpdatePasswordForm from "@/components/auth/update-password-form";

export const metadata = createMetadata({
  title: "Update password",
  description: "Update your account password",
  canonical: "/update-password",
});


export default async function UpdatePasswordPage() {
  return (
    <div className="mx-auto max-w-md pt-44 md:pt-32">
      <h1 className="text-center text-3xl font-semibold md:text-5xl md:font-normal">
        Update Password
      </h1>
      <UpdatePasswordForm />
    </div>
  );
}
