import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { MetadataRoute } from "next";
import slugify from "slugify";

async function generatePostMetadata() {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return sortedPosts.map(({ title, date }) => ({
    url: `https://cn.mbhalati.com/${slugify(title, { lower: true }).replaceAll(":", "-").replaceAll("'", "")}`,
    lastModified: date,
    changeFrequency: "never" as const,
    priority: 0.7,
  }));
}

async function generateCategoryMetadata() {
  const categories = new Set<string>();

  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  sortedPosts.forEach(({ category }) => categories.add(category));

  return Array.from(categories).map((category) => ({
    url: `https://cn.mbhalati.com/category/${slugify(category, { lower: true })}`,
    lastModified: new Date(),
    changeFrequency: "never" as const,
    priority: 0.5,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postMeta = await generatePostMetadata();
  const categoryMeta = await generateCategoryMetadata();

  return [
    {
      url: "https://cn.mbhalati.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cn.mbhalati.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...postMeta,
    ...categoryMeta,
  ];
}
