"use server";

export const createPostAction = async (formData: FormData) => {
  const postContent = formData.get("postContent");
  console.log("post created", postContent);
};
