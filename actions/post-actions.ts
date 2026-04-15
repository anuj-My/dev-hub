"use server";
import { currentUser } from "@clerk/nextjs/server";
import db from "../lib/prisma";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

export const createPostAction = async (formData: FormData) => {
  try {
    const postContent = formData.get("postContent") as string;

    if (!postContent || postContent.trim() === "") {
      throw new Error("Post content is required");
    }

    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    await db.post.create({
      data: {
        postContent: postContent,
        userId: user.id,
      },
    });

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
