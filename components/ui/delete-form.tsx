"use client";

import { deletePost } from "@/lib/actions";
import Form from "next/form";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export function DeleteForm({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoubleConfirm, setIsDoubleConfirm] = useState(false)

  const clientAction = async () => {
    await deletePost(id);
    setIsOpen(false);
    setIsDoubleConfirm(false)
  };

  function handleClose() {
    setIsOpen(false)
    setIsDoubleConfirm(false)
  }

 return (
   <>
     {/* Trigger button — opens confirmation modal */}
     <button
       onClick={() => setIsOpen(true)}
       className="px-3 py-1 bg-red-600 text-white rounded-lg transition-all duration-200 hover:scale-110 hover:-rotate-2 active:scale-95 hover:bg-red-800 hover:rounded-xl active:bg-red-400"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         className="text-white inline"
         aria-label="Delete button"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <path d="M10 11v6" />
         <path d="M14 11v6" />
         <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
         <path d="M3 6h18" />
         <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
       </svg>
     </button>

     {/* Confirmation modal - Centered */}
     {isOpen && (
       <div
         className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
         onClick={handleClose}
       >
         <div
           className="bg-white p-8 rounded-lg flex flex-col gap-4 items-center"
           onClick={(e) => e.stopPropagation()}
         >
           <h2 className="text-black text-xl font-bold">Are you sure?</h2>
           <p className="text-gray-500 text-sm">
             This action cannot be undone.
           </p>
           <div className="flex gap-3">
             <button
               onClick={handleClose}
               className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
             >
               Cancel
             </button>
             <button
               onClick={() => setIsDoubleConfirm(true)}
               className="px-5 py-2 bg-red-600 text-white rounded-xl"
             >
               Delete
             </button>
           </div>
         </div>
       </div>
     )}
     {/* Second confirmation — bottom right of screen */}
     {isDoubleConfirm && (
       <div className="fixed bottom-8 right-8 z-50 bg-white border-2 border-red-600 p-6 rounded-lg shadow-2xl flex flex-col gap-4 items-center">
         <h2 className="text-black text-xl font-bold">
           Are you really sure about this?
         </h2>
         <p className="text-gray-500 text-sm">There is no going back.</p>
         <div className="flex gap-3">
           <button
             onClick={handleClose}
             className="px-5 py-2 bg-white text-black rounded-xl border-2 border-black"
           >
             Cancel
           </button>
           <Form action={clientAction}>
             <ConfirmDeleteButton />
           </Form>
         </div>
       </div>
     )}   
   </>
 );
}

function ConfirmDeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-2 bg-red-600 text-white rounded-xl border-2 border-red-600 disabled:cursor-not-allowed"
    >
      {pending ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="opacity-60 animate-spin text-white inline"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
      ) : (
        "Delete"
      )}
      <span className="sr-only">{pending ? "Deleting..." : "Delete"}</span>
    </button>
  );
}

