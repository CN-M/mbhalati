import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

async function sharedMetaData() {
  return {
    // enable this for resolving opengraph image
    metadataBase: new URL("https://cn.mbhalati.com/"),
    title: {
      default: "C.N. Mbhalati | Part-Time Astronaut",
    },
    description:
      "Hey. My name is C.N. I'm a Software Engineer. UI/UX Designer. Founder. And a Man Loved by Jesus.",
    keywords: ["Warren Buffett", "Tech", "Startup", "Christian"],
    authors: [{ name: "C.N. Mbhalati" }],
    canonical: "https://cn.mbhalati.com/",

    twitter: {
      title: "C.N. Mbhalati | Part-Time Astronaut",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata() {
  return await sharedMetaData();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
