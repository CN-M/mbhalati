"use client";

import { deletePost, likePost } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { formatDate } from "@/lib/utils";
import { Like } from "@prisma/client";
import { Heart } from "lucide-react";
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

export function Posts({
  posts,
  currentUser,
}: {
  posts: CleanPost[];
  currentUser: string;
}) {
  const [{ message: likeMessage, response: likeResponse }, likeAction] =
    useActionState(likePost, {
      message: "",
      response: "",
    });

  const [{ message: deleteMessage, response: deleteResponse }, deleteAction] =
    useActionState(deletePost, {
      message: "",
      response: "",
    });

  const { toast } = useToast();

  // Like Action useEffect for showing toast notifications
  useEffect(() => {
    if (likeResponse === "Success") {
      toast({
        title: likeMessage,
        // description: likeMessage,
        variant: "success",
      });
    } else if (likeResponse === "Error") {
      toast({
        // title: "Error Liking Post",
        title: likeMessage,
        // description: likeMessage,
        variant: "destructive",
        className: "bg-red-700",
      });
    }
  }, [likeResponse, likeMessage, toast]);

  // Delete Action useEffect for showing toast notifications
  useEffect(() => {
    if (deleteResponse === "Success") {
      toast({
        title: "Post Deleted",
        description: deleteMessage,
        variant: "success",
      });
    } else if (deleteResponse === "Error") {
      toast({
        title: "Error Deleting Post",
        description: deleteMessage,
        variant: "destructive",
        className: "bg-red-700",
      });
    }
  }, [deleteResponse, deleteMessage, toast]);

  return (
    <div className="space-y-5">
      {posts.map((post) => {
        const isLiked = post.likes.some((like) => like.userId === currentUser);
        const isAuthor = post.user.id === currentUser;

        return (
          <Card
            key={post.id}
            className="rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow dark:bg-zinc-900/30"
            id={`message-${post.id}`}
          >
            <div className="mb-3 flex gap-3">
              <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
                <img
                  className="aspect-square size-10 rounded-full"
                  width={40}
                  height={40}
                  alt={`${post.user.firstName} ${post.user.lastName}`}
                  src={post.user.profilePicture}
                />
              </span>
              <div className="flex flex-col justify-center gap-px text-sm">
                <div>{`${post.user.firstName} ${post.user.lastName}`}</div>
                <div className="text-muted-foreground text-xs">
                  {formatDate(post.createdAt)}
                </div>
              </div>
            </div>

            <div className="break-words pl-[52px]">{post.message}</div>

            <div className="mt-2 pl-[52px] flex justify-between items-center gap-4">
              <form action={likeAction}>
                <input type="hidden" name="postId" value={post.id} />
                <Button
                  type="submit"
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Heart
                    className={`h-5 w-5 transition ${
                      isLiked
                        ? "fill-red-500 text-red-500"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span className={`${isLiked ? "text-red-500" : ""}`}>
                    {post.likes.length}
                  </span>
                </Button>
              </form>

              {isAuthor && (
                <form action={deleteAction}>
                  <input type="hidden" name="postId" value={post.id} />
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="flex items-center gap-1 bg-red-700 text-white hover:bg-red-800"
                  >
                    Delete
                  </Button>
                </form>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}