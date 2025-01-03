import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    featured: { type: "boolean", required: false },
    excerpt: { type: "string", required: false },
    category: {
      type: "enum",
      options: [
        "Christian",
        "Short Story",
        "Technology",
        "Philosophical Musings",
      ],
      required: true,
    },
    date: { type: "date", required: true },
    coverImage: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
  content: {
    type: "markdown",
    remarkPlugins: [remarkHtml],
    rehypePlugins: [rehypeStringify],
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
