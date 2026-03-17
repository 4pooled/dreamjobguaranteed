import { JobPost } from "@/lib/types";
import JobPostCard from "./job-post-card";
import { jobs } from "@/server/db.json";

export default function JobPostCardGrid() {
  const serverJobs = jobs as JobPost[];
  return (
    <section className="container mx-auto px-4 py-16 space-y-4">
      <h2 className="text-3xl font-bold">Jobbys</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
        {serverJobs.map((job) => (
          <li key={job.id}>
            <JobPostCard jobPost={job} />
          </li>
        ))}
      </ul>
    </section>
  );
}
