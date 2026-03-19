"use server";
import fs from "fs";
import path from "path";
import { deletePostById, updatePostById } from "./db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: {
  title: string;
  description: string;
  category: string;
  hyperlink: string;
}) {
  const filePath = path.join(process.cwd(), "server", "db.json");
  const file = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newPost = {
    id: Date.now(), // simple unique id for now
    title: formData.title,
    description: formData.description,
    category: formData.category,
    hyperlink: formData.hyperlink,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  file.jobs.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
  revalidatePath("/");
}

export async function updatePost(formData: {
  id: number;
  title: string;
  description: string;
  category: string;
  hyperlink: string;
}) {
  // Call updatePostById with the id from formData, and pass the updated fields
  await updatePostById(formData.id, {
    // Spread operator to put the existing formData fields into the new object
    ...formData,
    // Override updatedAt with current timestamp
    updatedAt: new Date().toISOString(),
  });

  revalidatePath("/");
}

export async function deletePost(id: number) {
  const response = await deletePostById(id);
  if (!response) return false;
  revalidatePath("/");
  return true;
}
