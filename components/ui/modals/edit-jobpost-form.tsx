"use client";
import { useState } from "react";
import { updatePost } from "@/lib/actions";
import { JobPost } from "@/lib/types";
import { Modal } from "./create-jobpost-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditPostModal({ jobPost }: { jobPost: JobPost }) {
  const [isOpen, setIsOpen] = useState(false);
  // Pre-fill state with existing post data
  const [title, setTitle] = useState(jobPost.title);
  const [description, setDescription] = useState(jobPost.description);
  const [category, setCategory] = useState(jobPost.category);
  const [hyperlink, setHyperlink] = useState(jobPost.hyperlink);

  function handleClose() {
    setIsOpen(false);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    // Pass the existing id along with updated fields
    await updatePost({
      id: jobPost.id,
      title,
      description,
      category,
      //   Optional check
      hyperlink: hyperlink ?? "",
    });
    handleClose();
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-1 bg-blue-500 text-white rounded-lg transition-all duration-200 hover:scale-110 rotate-45 active:scale-95 hover:bg-purple-500 hover:rounded-xl active:bg-pink-500"
      >
        Edit
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2 className="text-white text-2xl mb-10 text-center">Edit post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-white text-xl font-medium ml-1"
              >
                Title
              </label>
              <Input
                id="title"
                minLength={3}
                maxLength={20}
                spellCheck
                pattern="[A-Za-z0-9\s\-']+"
                title="Letters, numbers, spaces, hyphens and apostrophes only"
                placeholder="e.g. Senior Frontend Developer"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="placeholder:text-white/80 text-white text-lg"
              />
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <label
                htmlFor="description"
                className="text-white text-xl font-medium ml-1"
              >
                Description
              </label>

              <Textarea
                id="description"
                spellCheck
                minLength={20}
                maxLength={500}
                placeholder="Describe the role, responsibilities, and what you're looking for..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="flex-1 resize-none placeholder:text-white/80 text-white text-lg"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-white text-xl font-medium ml-1"
              >
                Category
              </label>
              <Input
                id="category"
                placeholder="e.g. Engineering, Design, Marketing"
                pattern="[A-Za-z\s]+"
                title="Letters and spaces only"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="placeholder:text-white/80 text-white text-lg"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="hyperlink"
                className="text-white text-xl font-medium ml-1"
              >
                Link (optional)
              </label>
              <Input
                id="hyperlink"
                type="url"
                placeholder="https://yourcompany.com/jobs/123"
                value={hyperlink}
                onChange={(e) => setHyperlink(e.target.value)}
                className="placeholder:text-white/80 text-white text-lg"
              />
            </div>
          </div>
          <div className="ml-auto mt-auto flex gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2 bg-white text-black hover:scale-[1000%] duration-1000 hover:animate-spin-once rounded-xl border-2 border-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-white text-black hover:scale-[1000%] duration-1000 hover:animate-spin-once transition-all rounded-xl border-2 border-black"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
