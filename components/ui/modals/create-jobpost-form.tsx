"use client";
import { useState } from "react";

import { createPost } from "@/lib/actions";

export function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg w-[60%] min-h-[80%] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default function CreatePostModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [hyperlink, setHyperlink] = useState("");

  function handleClose() {
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setHyperlink("");
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    await createPost({ title, description, category, hyperlink });
    console.log({ title, description, category, hyperlink });
    handleClose();
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-white text-black rounded-xl"
      >
        New
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2 className="text-black text-2xl mb-10 text-center">
          Create a new post
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          <div className="flex flex-col gap-5">
            <input
              placeholder=" Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black w-[20%] border-2 border-black rounded-lg"
            />
            <textarea
              placeholder=" Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-black min-h-[200px] w-full resize-y border-2 border-black rounded-lg"
            />

            <input
              placeholder=" Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-black w-[20%] border-2 border-black rounded-lg"
            />
            <input
              placeholder=" Link"
              value={hyperlink}
              onChange={(e) => setHyperlink(e.target.value)}
              className="text-black w-[20%] border-2 border-black rounded-lg"
            />
          </div>

          <div className="ml-auto mt-auto flex gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
