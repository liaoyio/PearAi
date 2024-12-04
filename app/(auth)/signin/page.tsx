import { createMetadata } from "@/utils/metadata";
import SignIn from "@/components/auth/signin";

export const metadata = createMetadata({
  title: "Sign In",
  description: "Sign in to your account",
  canonical: "/signin",
});

interface SignInProps {
  searchParams: {
    callback?: string;
    [key: string]: string | string[] | undefined;
  };
}

export default async function SignInPage({ searchParams }: SignInProps) {
  return <SignIn />
}
