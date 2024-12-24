"use server";

import { prisma } from "@/lib/server/db";
import {
  hashPassword,
  verifyPasswordHash,
  verifyPasswordStrength,
} from "@/lib/server/password";
import {
  createSession,
  deleteSessionTokenCookie,
  generateSessionToken,
  getCurrentSession,
  invalidateSession,
  setSessionTokenCookie,
} from "@/lib/server/session";
import { revalidatePath, revalidateTag } from "next/cache";

import { redirect } from "next/navigation";
import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(64, { message: "Email must be at most 64 characters long" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(255, { message: "Password must be at most 255 characters long" }),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(64, { message: "First name must be at most 64 characters long" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(64, { message: "Last name must be at most 64 characters long" }),
});

const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(64, { message: "Email must be at most 64 characters long" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(255, { message: "Password must be at most 255 characters long" }),
});

export const login = async (
  prevState: {
    message: string;
    response: string;
  },
  formData: FormData
) => {
  const email = formData.get("email")?.toString().toLowerCase();
  const password = formData.get("password")?.toString();

  const result = loginSchema.safeParse({ email, password });

  if (!result.success) {
    const errorsArray: any[] = [];
    result.error.errors.forEach((error) => {
      errorsArray.push(error.message);
    });

    console.log(result.error.errors);

    const err = errorsArray.join(", ");
    console.log(err);
    return {
      message: err,
      response: "Error",
    };
  } else {
    const { email, password } = result.data;

    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return {
        response: "Error",
        message: "Account does not exist",
      };
    }

    const validPassword = await verifyPasswordHash(
      existingUser.password!,
      password
    );

    if (!validPassword) {
      return {
        response: "Errror",
        message: "Invalid Credentials",
      };
    }

    const token = generateSessionToken();
    const session = createSession(token, existingUser.id);
    setSessionTokenCookie(token, (await session).expiresAt);

    // revalidateTag("user");

    revalidatePath("/");
    return redirect("/");
  }
};

export const register = async (
  prevState: {
    message?: string;
    error?: {
      path: string;
      message: string;
    }[];
  },
  formData: FormData
) => {
  const email = formData.get("email")?.toString().toLowerCase();
  const password = formData.get("password")?.toString();
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();

  const result = registerSchema.safeParse({
    email,
    password,
    firstName,
    lastName,
  });

  if (!result.success) {
    const errorsArray: any[] = [];
    result.error.errors.forEach((error) => {
      errorsArray.push(error.message);
    });

    console.log(result.error.errors);

    const err = errorsArray.join(", ");
    console.log(err);
    return {
      message: err,
      response: "Error",
    };
  } else {
    const { email, password, firstName, lastName } = result.data;

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      return {
        message: "Email already registered",
        response: "Error",
      };
    }

    const isPasswordStrong = await verifyPasswordStrength(password);

    // if (!isPasswordStrong) {
    //   return {
    //     message: "Password not strong enough",
    //     resposne: "Error",
    //   };
    // }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    const { id } = newUser;
    const token = generateSessionToken();
    const session = createSession(token, id);
    setSessionTokenCookie(token, (await session).expiresAt);

    revalidateTag("user");

    return redirect("/");
  }
};

export const logout = async () => {
  const { session } = await getCurrentSession();

  if (!session) {
    return {
      message: "Session not found",
      response: "Error",
    };
  }
  await invalidateSession(session.id);
  await deleteSessionTokenCookie();

  revalidateTag("user");

  revalidatePath("/");
  revalidatePath("/dashboard");

  return redirect("/");
};
