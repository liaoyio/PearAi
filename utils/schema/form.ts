import { z } from "zod";
import { isDisposableEmail } from "../disposable-email";

export const email_schema = z.object({
  email: z
    .string()
    .email({ message: "Email address is invalid." })
    .refine(async (email) => !(await isDisposableEmail(email)), {
      message:
        "Disposable email addresses are not allowed. Not using a disposable email? Please contact pear@trypear.ai.",
    }),
});

export const password_schema = z.object({
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

export const signup_schema = z.object({
  full_name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name is too long." }),
  email: email_schema.shape.email,
  company_name: z
    .string()
    .max(30, { message: "Company name is too long." })
    .optional(),
  password: password_schema.shape.password,
  heard_about_us: z
    .string({
      required_error: "Please tell us how you heard about us.",
    })
    .max(30, { message: "Message too long" }),
});

export const signin_schema = z.object({
  email: email_schema.shape.email,
  password: password_schema.shape.password,
});


export type SignUpFormData = z.infer<typeof signup_schema>;
export type SignInFormData = z.infer<typeof signin_schema>;
