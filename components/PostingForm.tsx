"use client";

import { Button } from "@/components/ui/button";

import { post } from "@/app/guestbook/actions";
import { Like } from "@prisma/client";
import { useActionState, useEffect } from "react";

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
          className="border-input bg-background ring-offset-background flex min-h-20 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Leave a message"
          name="content"
          id="message-form-item"
          aria-describedby="message-form-item-description"
          aria-invalid="false"
          style={{ height: "30px" }}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end gap-2">
        <Button
          type="submit"
          className="h-10 px-4 py-2 bg-secondary/75 text-black-100/75 hover:bg-secondary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
