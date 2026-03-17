export default async function JobPost({ params }: PageProps<"/job-post/[id]">) {
  const { id } = await params;
  return (
    <div className="">
      <h1>this is the job post of id: {id}</h1>
    </div>
  );
}
