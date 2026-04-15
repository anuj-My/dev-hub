"use server";
import { currentUser, User } from "@clerk/nextjs/server";
import db from "../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

export const createPostAction = async (formData: FormData) => {
  try {
    const postContent = formData.get("postContent") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const title = formData.get("title") as string;

    if (!postContent || postContent.trim() === "") {
      throw new Error("Post content is required");
    }

    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

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

    console.log("post created", postContent);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};
