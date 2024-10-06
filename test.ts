import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
// import slugify from "slugify";

// Generate post metadata for sitemap
async function generatePostMeta() {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  //   const slugs = []
  //   const postUrl = slugify(title, { lower: true }).replaceAll(":", "-");

  return sortedPosts.map((post) => ({
    url: `https://yourdomain.com/post/${post}`,
    lastModified: post.date,
    changeFrequency: "never", // You can adjust this based on your update frequency
    priority: 0.7,
  }));
}

console.log(generatePostMeta());
