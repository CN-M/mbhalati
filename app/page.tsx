import { AboutMe } from "@/components/AboutMe";
import { ContactMe } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutMe />
      <ContactMe />
      <Footer />
    </main>
  );
}
