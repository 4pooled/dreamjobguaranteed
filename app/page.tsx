import JobPostCardGrid from "@/components/ui/job-post-grid";
import SearchBar from "@/components/ui/search-bar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <JobPostCardGrid></JobPostCardGrid>
    </main>
  );
}
