import JobPostDetail from "@/components/ui/job-post-detail";

export default async function JobPost({ params }: PageProps<"/job-post/[id]">) {
  const { id } = await params;

  const postData = await fetch(`http://localhost:4000/jobs/${id}`).then((res) =>
    res.json(),
  );

  return (
    <div>
      <JobPostDetail postData={postData} />
    </div>
  );
}
