"use client";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GitHub, GoogleLogoColored } from "@/assets/icons";
import { Button, Input, Label, Checkbox } from "@/components/ui";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { signup_schema, SignUpFormData } from "@/utils/schema/form";

import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import { useToggle } from "@/hooks/useToggle";
import { AdminUserAttributes, Provider } from "@supabase/supabase-js";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signup_schema),
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      password: "",
      heard_about_us: "",
    },
  });
  const router = useRouter();

  const handleSignUp = async (data: SignUpFormData) => {
    if (isSubmitting) return;
    toast.message('TODO -> SignUp')
  };

  const handleOAuthSignUp = async (provider: Provider) => {
    toast.message('TODO -> AuthSignUp')
  };
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <h1 className="h1">
            Ready to speed up your development experience?
          </h1>
        </div>

        <div className="mx-auto max-w-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOAuthSignUp("google");
            }}
          >
            <Button
              type="submit"
              size="lg"
              variant="authgroup"
              className="relative flex w-full items-center rounded-md px-0"
            >
              <GoogleLogoColored className="text-white mx-1 h-4 w-4 shrink-0" />
              <span>Sign up with Google</span>
            </Button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOAuthSignUp("github");
            }}
          >
            <div className="-mx-3 flex flex-wrap">
              <div className="mt-3 w-full px-3">
                <Button
                  type="submit"
                  size="lg"
                  variant="authgroup"
                  className="relative flex w-full items-center rounded-md px-0"
                >
                  <GitHub className="mx-1 h-4 w-4 shrink-0 text-gray-700" />
                  <span>Sign up with Github</span>
                </Button>
              </div>
            </div>
          </form>
          <div className="my-6 flex items-center">
            <div
              className="mr-3 grow border-t border-dotted border-gray-400"
              aria-hidden="true"
            />
            <div className="text-gray-400">Or, register with your email</div>
            <div
              className="ml-3 grow border-t border-dotted border-gray-400"
              aria-hidden="true"
            />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignUp)}
              className="space-y-4"
            >
              <FormField
                name="full_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="full_name">Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        id="full_name"
                        placeholder="First and last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="company_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company_name">Company Name</FormLabel>
                    <FormControl>
                      <Input
                        id="company_name"
                        placeholder="Your company or app name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email *</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="helloworld@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password *</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Password (at least 8 characters)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Label className="flex items-center">
                <Checkbox
                  className="rounded"
                  checked={isPasswordVisible}
                  onCheckedChange={togglePasswordVisibility}
                />
                <span className="ml-2 cursor-pointer text-gray-600">
                  Show Password
                </span>
              </Label>

              <FormField
                name="heard_about_us"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="heard_about_us">
                      How did you hear about us?
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="heard_about_us"
                        placeholder="e.g. YouTube, Twitter, Friend, Instagram, LinkedIn, Other"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center text-sm text-gray-600">
                <Link
                  href="/privacy"
                  className="underline transition duration-150 ease-in-out hover:text-gray-700 hover:no-underline"
                >
                  Privacy Policy
                </Link>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-md"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>

              <Toaster richColors />
            </form>
          </Form>

          <div className="mt-6 text-center text-gray-600">
            Already have an account?
            <Link
              href="/signin"
              className="text-gray-800 underline transition duration-150 ease-in-out hover:text-primary-800"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
