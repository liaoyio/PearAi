import { redirect } from "next/navigation";
import { Fragment } from "react";
import { createMetadata } from "@/utils/metadata";
import SignUp from "@/components/auth/signup";

export const metadata = createMetadata({
  title: "Sign Up",
  description: "Sign up for an account",
  canonical: "/signup",
});

export default async function SignUpPage() {
  // const supabase = createClient();
  // const { data } = await supabase.auth.getUser();
  // if (data?.user) redirect("/");
  return <SignUp />

}
