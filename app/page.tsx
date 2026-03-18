import JobPostCardGrid from "@/components/ui/job-post-grid";
import MainNavigation from "@/components/ui/navigation/main-navigation";
import SearchBar from "@/components/ui/search-bar";

export default function Home() {
  return (
    <main>
      <MainNavigation />
      <SearchBar />
      <JobPostCardGrid></JobPostCardGrid>
    </main>
  );
}
