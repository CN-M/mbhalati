import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

async function sharedMetaData() {
  const mainUrl = "https://cn.mbhalati.com/";

  return {
    metadataBase: new URL(mainUrl),
    alternates: {
      canonical: "/",
    },
    title: {
      default: "C.N. Mbhalati | Part-Time Astronaut",
      template: "%s | C.N. Mbhalati",
    },
    description:
      "Hey. My name is C.N. I'm a Software Engineer. UI/UX Designer. Founder. Writer. And a Man Loved by Jesus.",
    keywords: [
      "C.N. Mbhalati",
      "Tech",
      "Startup",
      "Christian",
      "Software Engineer",
      "UI/UX Designer",
      "Founder",
      "Writer",
      "Short Stories",
      "Jesus",
      "Faith",
    ],
    authors: [{ name: "C.N. Mbhalati" }],
    canonical: mainUrl,
    openGraph: {
      type: "website",
      siteName: "C.N. Mbhalati",
      locale: "en",
      url: mainUrl,
      title: "C.N. Mbhalati | Part-Time Astronaut",
      description:
        "Hey. My name is C.N. I'm a Software Engineer. UI/UX Designer. Founder. Writer. And a Man Loved by Jesus.",
      images: [
        {
          url: `${mainUrl}/img/opengraph.jpg`,
          width: 1200,
          height: 630,
          alt: "C.N. Mbhalati - Part-Time Astronaut",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@CNMbhalati",
      title: "C.N. Mbhalati | Part-Time Astronaut",
      description:
        "Hey. My name is C.N. I'm a Software Engineer. UI/UX Designer. Founder. Writer. And a Man Loved by Jesus.",
      images: [`${mainUrl}/img/twitter-card.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      viewport: "width=device-width,initial-scale=1",
      charset: "UTF-8",
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
        {children}
      </body>
    </html>
  );
}
