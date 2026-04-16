"use server";
import db from "../lib/prisma";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { FormState } from "@/components/form/FormContainer";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
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
        message: "Unauthorized",
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

    revalidatePath("/dashboard");

    return { message: "Post created successfully.", success: true };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAllPostAction = async () => {
  try {
    await getAuthUser();

    const post = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return post;
  } catch (error) {
    renderError(error);
  }
};
