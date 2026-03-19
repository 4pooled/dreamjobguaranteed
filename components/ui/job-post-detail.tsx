import { JobPost } from "@/lib/types";
import Link from "next/link";
import EditPostModal from "./modals/edit-jobpost-form";
import { DeleteForm } from "./delete-form";

export default function JobPostDetail({ postData }: { postData: JobPost }) {
  if (!Object.keys(postData).length) {
    return <h1>Post was not found.</h1>;
  }

  return (
    <div className="m-5">
      <Link href="/" className="border p-1 rounded-lg">
        Go Back
      </Link>
      <div className="flex flex-col gap-2 mt-5 w-200 mx-auto">
        <h1 className="text-center text-xl font-bold">{postData.title}</h1>
        <p className="text-center">{postData.category}</p>
        <p className="text-pretty">{postData.description}</p>
        <br />
        <p className="cursor-pointer">{postData.hyperlink}</p>
        <p className="cursor-pointer">{postData.companyHyperlink}</p>
        <EditPostModal jobPost={postData}/>
        <DeleteForm id={postData.id}/>
      </div>
    </div>
  );
}
