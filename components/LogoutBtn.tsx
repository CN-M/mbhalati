"use client";

import { logout } from "@/app/(main)/guestbook/actions";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";

export const Logout = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    posthog.capture("user_logged_out");
    posthog.reset();
    logout();
  };

  return (
    <Button
      type="submit"
      variant="default"
      onClick={handleClick}
      className="h-10 px-4 py-2 bg-black-100 text-white hover:bg-black-100/75"
    >
      Logout
    </Button>
  );
};
