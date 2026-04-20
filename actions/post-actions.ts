"use server";
import db from "../lib/prisma";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { FormState } from "@/components/form/FormContainer";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return user;
};

const syncUser = async (user: User) => {
  await db.user.upsert({
    where: {
      id: user.id,
    },
    update: {},
    create: {
      id: user.id,
      name: user.fullName || "Anonymous",
      imageUrl: user.imageUrl || "",
    },
  });
};

const renderError = (error: unknown): FormState => {
  return {
    message: error instanceof Error ? error.message : "Something weng wrong",
    success: false,
  };
};

export const createPostAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  try {
    const postContent = formData.get("postContent") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const title = formData.get("title") as string;

    if (!postContent || postContent.trim() === "") {
      return {
        message: "Post content is required",
        success: false,
      };
    }

    const user = await currentUser();
    if (!user) {
      return {
        message: "You are not logged in",
        success: false,
      };
    }

    await syncUser(user);

    await db.post.create({
      data: {
        postContent: postContent,
        userId: user.id,
        title: title,
        // imageUrl: '',
        authorName: user.fullName || "Anonymous",
        authorImage: user.imageUrl || "",
      },
    });

    revalidatePath("/explore");

    return { message: "Post created successfully.", success: true };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAllPostAction = async () => {
  try {
    const user = await getAuthUser();

    const post = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        bookmarks: {
          where: {
            userId: user.id,
          },
        },
      },
    });
    return post;
  } catch (error) {
    return [];
  }
};

export const createCommentAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  try {
    const comment = formData.get("comment") as string;
    const postId = formData.get("postId") as string;

    if (!comment || comment.trim() === "") {
      return {
        message: "Comment cannot be empty",
        success: false,
      };
    }

    const user = await getAuthUser();

    await syncUser(user);

    const post = await db.comment.create({
      data: {
        comment,
        userId: user.id,
        postId,
      },
    });

    revalidatePath("/explore");

    return { message: "Comment added successfully", success: true };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchCommentsAction = async (postId: string) => {
  try {
    const comments = await db.comment.findMany({
      where: {
        postId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return comments;
  } catch (error) {
    return [];
  }
};


export const toggleBookmarkAction = async (postId: string) =>{
  try{
    const user = await getAuthUser();
    await syncUser(user);

    const existingBookmark = await db.bookmark.findUnique({
      where: {
        userId_postId: {
          userId: user.id,
          postId
        }
      }
    })

    if(existingBookmark){
      await db.bookmark.delete({
        where: {
          userId_postId:{
            userId: user.id,
            postId
          }
        }
      })
      return {message: 'Post removed from bookmarks', success: true}
    }

    await db.bookmark.create({
      data: {
        userId: user.id,
        postId
      }
    })
    revalidatePath('/explore')
    return {message: 'Post added to bookmarks', success: true}
  }catch(error){
    return renderError(error)
  }
}

export const fetchBookmarkedPostsAction = async () => {
  try {
    const user = await getAuthUser();

    const bookmarks = await db.bookmark.findMany({
      where: {
        userId: user.id,
      },
      include: {
        post: true,
      },
    });

    return bookmarks;
  } catch (error) {
    return [];
  }
}

export const togglePostLikeAction = async(postId: string) =>{
  try{
    const user = await getAuthUser()

    await syncUser(user)

    const existingLike = await db.like.findUnique({
      where :{
        userId_postId:{
          userId: user.id,
          postId
        }
      }
    })

    if(existingLike){
      await db.like.delete({
        where: {
          userId_postId: {
            userId: user.id,
            postId
          }
        }
      })
      return {message: 'Post unliked', success: true}
    }

    await db.like.create({
      data: {
        userId: user.id,
        postId
      }
    })
    revalidatePath('/explore')
    return {message: 'Post liked', success: true}

  }catch(error){
    return renderError(error)
  }
}