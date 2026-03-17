"use server"
import fs from "fs";
import path from "path";

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
}