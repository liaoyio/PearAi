import { redirect } from "next/navigation";
// import SignUpComponent from "@/components/auth/signup";
import { Fragment } from "react";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Sign Up",
  description: "Sign up for an account",
  canonical: "/signup",
});

export default async function SignUp() {
  // const supabase = createClient();
  // const { data } = await supabase.auth.getUser();
  // if (data?.user) redirect("/");
  return (
    <Fragment>
      {/* <SignUpComponent /> */}
      SignUpComponent
    </Fragment>
  );
}
