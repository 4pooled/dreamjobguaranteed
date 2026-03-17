import JobPostCardGrid from "@/components/ui/job-post-grid";
import MainNavigation from "@/components/ui/navigation/main-navigation";

export default function Home() {
  return (
    <main>
      <MainNavigation />
      <JobPostCardGrid></JobPostCardGrid>
    </main>
  );
}
