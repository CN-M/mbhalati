"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export function PostHogIdentify({
  userId,
  email,
  firstName,
  lastName,
}: {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}) {
  useEffect(() => {
    posthog.identify(userId, {
      email,
      name: `${firstName} ${lastName}`,
    });
  }, [userId, email, firstName, lastName]);

  return null;
}
