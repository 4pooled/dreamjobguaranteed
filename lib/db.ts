import { revalidatePath } from "next/cache";
import { JobPost } from "./types";

const API_URL = "http://localhost:4000/";

// Should recieve a response from our api, then change it to a json, then return it
export async function getAllPosts() {
  const response = await fetch(`${API_URL}jobs`); // Get

  if (!response.ok) throw Error("Could not find any jobs.");

  const data = await response.json(); // Convert
  return data;
}

export async function getPostById(id: number) {
  const response = await fetch(`${API_URL}jobs/${id}`);

  if (!response.ok) {
    throw Error("The job post you are looking for does not exist.");
  }

  const data = await response.json();
  return data;
}

export async function deletePostById(id: number) {
  const response = await fetch(`${API_URL}jobs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) return false;

  revalidatePath("");
  return true;
}

export async function updatePostById(id: number, data: Object) {
  const response = await fetch(`${API_URL}jobs/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error("Could not update post.");

  revalidatePath("/");
  return await response.json();
}

export async function createPost(data: JobPost) {
const response = await fetch(`${API_URL}jobs}`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error("Could not create post.");

  revalidatePath("/");
  return await response.json();
}
