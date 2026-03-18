import JobPostCardGrid from "@/components/ui/job-post-grid";
import MainNavigation from "@/components/ui/navigation/main-navigation";
import CreatePostModal from "@/components/ui/modals/create-jobpost-form";

export default function Home() {
  return (
    <main>
      <MainNavigation />
      <JobPostCardGrid></JobPostCardGrid>
      <CreatePostModal />
    </main>
  );
}
