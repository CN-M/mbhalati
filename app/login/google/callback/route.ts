import { google } from "@/lib/auth";
import {
  createSession,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/lib/server/session";
import { decodeIdToken } from "arctic";
import { cookies } from "next/headers";

import { prisma } from "@/lib/server/db";
import type { OAuth2Tokens } from "arctic";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieStore = await cookies();
  const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;
  if (
    code === null ||
    state === null ||
    storedState === null ||
    codeVerifier === null
  ) {
    return new Response(null, {
      status: 400,
    });
  }
  if (state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch (e) {
    // Invalid code or client credentials
    return new Response(null, {
      status: 400,
    });
  }

  let firstName;
  let lastName;

  const claims = decodeIdToken(tokens.idToken());
  // @ts-expect-error This is untyped
  const googleId = claims.sub;

  // @ts-expect-error This is untyped
  if (claims.given_name && claims.family_name) {
    // @ts-expect-error This is untyped
    firstName = claims.given_name;
    // @ts-expect-error This is untyped
    lastName = claims.family_name;
    // @ts-expect-error This is untyped
  } else if (claims.name) {
    // @ts-expect-error This is untyped
    firstName = claims.name;
    lastName = "";
  }

  // @ts-expect-error This is untyped
  const email = claims.email;
  // @ts-expect-error This is untyped
  const profilePicture = claims.picture;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ googleId }, { email }],
    },
  });

  if (existingUser !== null) {
    if (existingUser.googleId === null) {
      await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          googleId,
          profilePicture,
        },
      });
    }

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/guestbook",
      },
    });
  }

  const user = await prisma.user.create({
    data: {
      googleId,
      firstName,
      lastName,
      email,
      profilePicture,
    },
  });

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);
  await setSessionTokenCookie(sessionToken, session.expiresAt);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/guestbook",
    },
  });
}
