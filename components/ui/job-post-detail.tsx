import { JobPost } from "@/lib/types";

export default function JobPostDetail ({ postData }: { postData: JobPost}) {
  return (
    <div className="flex flex-col gap-4">
      <h1>{postData.title}</h1>
      <p>{postData.hyperlink}</p>
      <p>{postData.companyHyperlink}</p>
    </div>
  );
}
