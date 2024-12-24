"use client";

import { logout } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";

export const Logout = () => {
  return (
    <form action={logout}>
      <Button
        type="submit"
        variant="default"
        className="h-10 px-4 py-2 text-white"
      >
        Logout
      </Button>
    </form>
  );
};
