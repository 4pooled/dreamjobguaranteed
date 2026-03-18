"use server";
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

export async function updatePost(id: number, formData: {
  title: string;
  description: string;
  category: string;
  hyperlink: string;
}) {
 // denna funktion måste skapas med för att kunna uppdatera poster, så som du gjort ovan
 
  const filePath = path.join(process.cwd(), "server", "db.json");
  const file = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // 1. hitta index för post som ska uppdateras
  


  // 2. uppdatera objektet, men behåll gamla värden som inte ska uppdateras
}
