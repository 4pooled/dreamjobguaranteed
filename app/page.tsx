import JobPostCardGrid from "@/components/ui/job-post-grid";
import MainNavigation from "@/components/ui/navigation/main-navigation";
import CreatePostModal from "@/components/ui/modals/create-jobpost-form";
import SearchBar from "@/components/ui/search-bar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <JobPostCardGrid></JobPostCardGrid>
      <CreatePostModal />
    </main>
  );
}
