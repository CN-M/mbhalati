import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { LoginWithGoogle } from "@/components/Buttons";
import { getCurrentSession } from "@/lib/server/session";

import { Logout } from "@/components/LogoutBtn";
import { Posts } from "@/components/Posts";

import { TextBox } from "@/components/PostingForm";
import { prisma } from "@/lib/server/db";

import { Pin } from "lucide-react";

const pinnedMessage =
  "Yo! Thanks for visiting my site! Since you're here, can you do me a favour? Give me your thoughts on what you think of the site and my work. Just log in with your Google account and drop a comment. And don't be weird 👀. My parents might see this.";

export default async function Guestbook() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      createdAt: true,
      likes: true,
      message: true,
      user: {
        select: {
          id: true,
          profilePicture: true,
          firstName: true,
          lastName: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const { user, session } = await getCurrentSession();

  return (
    <div className="relative mx-auto xl:w-[40%] w-11/12 py-8 space-y-6">
      <h1 className="text-3xl font-light tracking-tight">Guestbook</h1>
      <Card className="relative border shadow-md">
        <CardHeader className="flex flex-row items-center gap-2 bg-muted/20 dark:bg-muted/50 rounded-t-lg py-4 px-6">
          <Pin className="h-5 w-5 rotate-45 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            Pinned
          </span>
        </CardHeader>
        <CardContent className="px-6">
          <p className="text-muted-foreground leading-paragraph">
            {pinnedMessage}
          </p>
        </CardContent>
      </Card>
      {/* Header */}

      {/* Content for logged-in or guest users */}
      {session ? (
        <div className="flex gap-3 items-start">
          {/* User Avatar */}
          <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={user.profilePicture}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </span>

          <div className="flex flex-col w-full items-end gap-2">
            <TextBox posts={posts} userId={user.id} />
            <Logout />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end">
          <LoginWithGoogle />
        </div>
      )}

      {/* Posts */}
      <div className="space-y-5">
        <Posts posts={posts} currentUser={user?.id || ""} />
      </div>
    </div>
  );
}
