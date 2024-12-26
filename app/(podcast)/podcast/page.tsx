import { PodcastEpisodes } from "@/components/PodcastEpisode";
import { PodcastHero } from "@/components/PodcastHero";

export async function generateMetadata() {
  return { title: "C.N. Mbhalati | Part-Time Astronaut" };
}

export default function PodcastPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PodcastHero />
      {/* <HomePageLatestPodcast /> */}
      <PodcastEpisodes />
    </main>
  );
}

export const revalidate = 3600;
