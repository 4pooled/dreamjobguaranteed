import { JobPost } from "@/lib/types";
import Link from "next/link";

export default function JobPostCard({ jobPost }: { jobPost: JobPost }) {
  return (
    <Link
      href={`/job-post/${jobPost.id}`}
      className={`block relative border rounded-xl shadow-md overflow-hidden hover:animate-spin-once`}
    >
      <div className="p-2 bg-black/40 text-white overflow-hidden">
        <h3 className="text-2xl font-bold text-center">{jobPost.title}</h3>
        <p>{jobPost.description}</p>
      </div>
    </Link>
  );
}
