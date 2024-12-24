"use server";

import {
  deleteSessionTokenCookie,
  getCurrentSession,
  invalidateSession,
} from "@/lib/server/session";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/server/db";

const posts = [
  {
    id: "1",
    user: "John Doe",
    message: "This is a great guestbook! Happy to be here.",
    date: "2024-12-20T12:34:56Z",
    likes: 3,
  },
  {
    id: "2",
    user: "Jane Smith",
    message: "Loving the vibe here! Keep it up. 😊",
    date: "2024-12-21T08:45:12Z",
    likes: 5,
  },
  {
    id: "3",
    user: "Mike Johnson",
    message: "Cool platform! Can't wait to see what's next.",
    date: "2024-12-22T14:23:45Z",
    likes: 2,
  },
  {
    id: "4",
    user: "Alice Brown",
    message: "Awesome guestbook, great design too!",
    date: "2024-12-23T10:12:34Z",
    likes: 4,
  },
  {
    id: "5",
    user: "Chris Evans",
    message: "Hello world! Testing this out. Looks great so far.",
    date: "2024-12-22T19:34:56Z",
    likes: 6,
  },
];

// export const like = async (postId) => {
//   const post = posts.find((p) => p.id === postId);

//   if (!post) {
//     return NextResponse.json({ error: "Post not found" }, { status: 404 });
//   }

//   // Update the like count based on the `liked` status
//   post.likes = liked ? post.likes + 1 : post.likes - 1;

//   return NextResponse.json({ post });
// };

const postSchema = z.object({
  content: z.string().min(1).max(200),
});

export const post = async (
  prevState: {
    message: string;
    response: string;
  },
  formData: FormData
): Promise<{ message: string; response: string }> => {
  const { user, session } = await getCurrentSession();

  if (!session) {
    return {
      message: "Must be logged in",
      response: "Error",
    };
  }

  const { id } = user;

  const content = formData.get("content");

  const result = postSchema.safeParse({
    content,
  });

  if (!result.success) {
    const errorsArray: any[] = [];
    result.error.errors.forEach((error) => {
      errorsArray.push(error.message);
    });

    const err = errorsArray.join(", ");
    console.log(err);
    return {
      message: err,
      response: "Error",
    };
  } else {
    const { content } = result.data;

    try {
      await prisma.post.create({
        data: {
          message: content,
          user: { connect: { id } },
        },
      });

      revalidatePath("/guestbook");

      return {
        message: "Announcement successfuly created",
        response: "Success",
      };
    } catch (err: any) {
      console.error(err);

      return {
        message: err.meta.cause,
        response: "Error",
      };
    }
  }
};

const likeSchema = z.object({
  postId: z.string().min(1),
});

export const likePost = async (
  prevState: { message: string; response: string },
  formData: FormData
): Promise<{ message: string; response: string }> => {
  const { user, session } = await getCurrentSession();

  if (!session) {
    return {
      message: "Must be logged in",
      response: "Error",
    };
  }

  const { id: userId } = user;
  const postId = formData.get("postId");

  const result = likeSchema.safeParse({ postId });

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message).join(", ");
    return {
      message: errors,
      response: "Error",
    };
  }

  try {
    const { postId } = result.data;

    // Check if the like already exists
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    if (existingLike) {
      // Unlike the post if it is already liked
      await prisma.like.delete({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
      });

      revalidatePath("/guestbook");

      return {
        message: "Post unliked",
        response: "Success",
      };
    }

    // Create the like if it doesn't exist
    await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });

    revalidatePath("/guestbook");

    return {
      message: "Post liked",
      response: "Success",
    };
  } catch (err: any) {
    console.error(err);

    return {
      message: err.meta?.cause || "An error occurred while liking the post",
      response: "Error",
    };
  }
};

const deleteSchema = z.object({
  postId: z.string().min(1),
});

export const deletePost = async (
  prevState: { message: string; response: string },
  formData: FormData
): Promise<{ message: string; response: string }> => {
  const { user, session } = await getCurrentSession();

  if (!session) {
    return {
      message: "Must be logged in",
      response: "Error",
    };
  }

  const postId = formData.get("postId");

  const result = deleteSchema.safeParse({ postId });

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message).join(", ");
    return {
      message: errors,
      response: "Error",
    };
  }

  try {
    console.log("OK1");

    const { postId } = result.data;

    console.log("OK2");
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    console.log("OK3");
    if (!post || post.userId !== user.id) {
      return {
        message: "You do not have permission to delete this post",
        response: "Error",
      };
    }
    console.log("OK4");

    // await prisma.post.delete({ where: { id: postId } });
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    console.log("OK5");
    revalidatePath("/guestbook");

    return {
      message: "Post deleted",
      response: "Success",
    };
  } catch (err: any) {
    console.error(err);

    return {
      message: err.meta?.cause || "An error occurred while deleting the post",
      response: "Error",
    };
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

  return revalidatePath("/guestbook");
};
