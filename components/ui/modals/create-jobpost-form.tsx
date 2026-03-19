"use client";
import { useState } from "react";
import { createPost } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Cube from "../cube/cube";

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
      <div className="absolute inset-0 -z-1 bg-black/30 rounded-lg" />
      <div
        className="bg-background text-foreground border border-border shadow-lg p-8 rounded-lg min-w-100 w-[40%] min-h-[60%] flex flex-col transition-transform duration-[2000ms] focus-within:[transform:scaleX(-1)_rotateZ(45deg)] [transform-style:preserve-3d]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: "url('/cool-cat-169ish.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col flex-1 ">{children}</div>
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
    handleClose();
  }

  return (
    <>
      <div className="flex">
        <Button
          className="mx-auto text-2xl leading-none flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          New
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">
          Create a new post
        </h2>
        <div className="-z-2 absolute left-[35%] top-[65%] opacity-80 pointer-events-none">
          <Cube />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-6 ">
          <div className="flex flex-col gap-4 flex-1">
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

          <div className="flex justify-end gap-2 mt-auto">
            <div className="bg-white rounded-lg flex justify-center items-center px-3 active:scale-95 active:brightness-75 transition-all select-none cursor-pointer hover:scale-105 mr-auto">
              Click
            </div>
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

// "use client";
// import { useState } from "react";
// import { createPost } from "@/lib/actions";

// function Modal({
//   isOpen,
//   onClose,
//   children,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-[60%] min-h-[80%] flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function CreatePostModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [hyperlink, setHyperlink] = useState("");

//   function handleClose() {
//     setIsOpen(false);
//     setTitle("");
//     setDescription("");
//     setCategory("");
//     setHyperlink("");
//   }

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     await createPost({ title, description, category, hyperlink });
//     console.log({ title, description, category, hyperlink });
//     handleClose();
//   }

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-5 py-2 bg-white text-black rounded-xl"
//       >
//         New
//       </button>

//       <Modal isOpen={isOpen} onClose={handleClose}>
//         <h2 className="text-black text-2xl mb-10 text-center">
//           Create a new post
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col flex-1">
//           <div className="flex flex-col gap-5">
//             <input
//               minLength={3}
//               maxLength={20}
//               spellCheck={true}
//               pattern="[A-Za-z0-9\s\-']+"
//               title="Letters, numbers, spaces, hyphens and apostrophes only"
//               placeholder=" Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="text-black w-[20%] border-2 border-black rounded-lg"
//               required
//             />
//             <textarea
//               spellCheck={true}
//               minLength={20}
//               maxLength={500}
//               placeholder=" Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="text-black min-h-[200px] w-full resize-y border-2 border-black rounded-lg"
//               required
//             />

//             <input
//               placeholder=" Category"
//               pattern="[A-Za-z\s]+"
//               title="Letters and spaces only"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="text-black w-[20%] border-2 border-black rounded-lg"
//               required
//             />
//             <input
//               type="url"
//               placeholder=" https://..."
//               value={hyperlink}
//               onChange={(e) => setHyperlink(e.target.value)}
//               className="text-black w-[20%] border-2 border-black rounded-lg"
//             />
//           </div>

//           <div className="ml-auto mt-auto flex gap-2">
//             <button
//               type="button"
//               onClick={handleClose}
//               className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
//             >
//               Create
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// }

// "use client";
// import { useState } from "react";
// import { createPost } from "@/lib/actions";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// function Modal({
//   isOpen,
//   onClose,
//   children,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-[60%] min-h-[80%] flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function CreatePostModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [hyperlink, setHyperlink] = useState("");

//   function handleClose() {
//     setIsOpen(false);
//     setTitle("");
//     setDescription("");
//     setCategory("");
//     setHyperlink("");
//   }

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     await createPost({ title, description, category, hyperlink });
//     handleClose();
//   }

//   return (
//     <>
//       <Button onClick={() => setIsOpen(true)}>New</Button>

//       <Modal isOpen={isOpen} onClose={handleClose}>
//         <h2 className="text-black text-2xl mb-10 text-center">
//           Create a new post
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col flex-1">
//           <div className="flex flex-col gap-5">
//             <div className="flex flex-col gap-1">
//               <label htmlFor="title" className="text-sm font-medium text-black">
//                 Title
//               </label>
//               <Input
//                 id="title"
//                 minLength={3}
//                 maxLength={20}
//                 spellCheck
//                 pattern="[A-Za-z0-9\s\-']+"
//                 title="Letters, numbers, spaces, hyphens and apostrophes only"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="description"
//                 className="text-sm font-medium text-black"
//               >
//                 Description
//               </label>
//               <Textarea
//                 id="description"
//                 spellCheck
//                 minLength={20}
//                 maxLength={500}
//                 placeholder="Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="min-h-[200px] resize-y"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="category"
//                 className="text-sm font-medium text-black"
//               >
//                 Category
//               </label>
//               <Input
//                 id="category"
//                 placeholder="Category"
//                 pattern="[A-Za-z\s]+"
//                 title="Letters and spaces only"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="hyperlink"
//                 className="text-sm font-medium text-black"
//               >
//                 Hyperlink
//               </label>
//               <Input
//                 id="hyperlink"
//                 type="url"
//                 placeholder="https://..."
//                 value={hyperlink}
//                 onChange={(e) => setHyperlink(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="ml-auto mt-auto flex gap-2">
//             <Button variant="outline" type="button" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button type="submit">Create</Button>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// }
