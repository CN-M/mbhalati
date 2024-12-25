"use client";

import { Button } from "@/components/ui/button";

import { post } from "@/app/guestbook/actions";
import { cn } from "@/lib/utils";
import { Like } from "@prisma/client";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

import { Logout } from "./LogoutBtn";

type CleanPost = {
  id: string;
  createdAt: Date;
  likes: Like[];
  message: string;
  user: {
    profilePicture: string;
    firstName: string;
    lastName: string;
    id: string; // Added user ID for comparison
  };
};

export const TextBox = ({
  posts,
  userId,
}: {
  posts: CleanPost[];
  userId: string;
}) => {
  const [{ message, response }, postAction] = useActionState(post, {
    message: "",
    response: "",
  });

  useEffect(() => {
    if (response === "Success") {
      console.log("Message sent!");
    } else if (response === "Error") {
      console.log("Message Failed!");
    }
  }, [message, response, postAction]);

  return (
    <form action={postAction} className="w-full">
      {/* Textarea */}
      <div className="space-y-2">
        <textarea
          className="resize-none border-input bg-background ring-offset-background flex min-h-20 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Leave a message"
          name="content"
          id="message-form-item"
          aria-describedby="message-form-item-description"
          aria-invalid="false"
          style={{ height: "30px" }}
        />
      </div>

      {/* Buttons */}
      <div className="md:mt-4 mt-2 flex justify-end gap-2">
        <Logout />
        <SubmitBtn />
      </div>
    </form>
  );
};

export const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn(
        "h-10 px-4 py-2 text-white  hover:bg-primary/75",
        pending ? "bg-primary/65" : ""
      )}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};
