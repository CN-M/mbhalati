import { AboutMe } from "@/components/AboutMe";
import { ContactMe } from "@/components/Contact";
import { Hero } from "@/components/Hero";

export async function generateMetadata() {
  return { title: "C.N. Mbhalati | Part-Time Astronaut" };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <ContactMe />
    </main>
  );
}

export const revalidate = 3600;
