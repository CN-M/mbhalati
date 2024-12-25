"use client";

import { logout } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";

export const Logout = () => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <Button
      type="submit"
      variant="outline"
      onClick={handleClick}
      className="h-10 px-4 py-2 border-black-100/25 text-black-100/65 hover:bg-black-100/10"
    >
      Logout
    </Button>
  );
};
