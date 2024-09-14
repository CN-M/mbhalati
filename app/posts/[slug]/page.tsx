import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      {post.coverImage && (
        <div className="my-6 w-full xl:h-[80vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] px-5 flex items-center justify-center">
          <Image
            src={post.coverImage}
            alt={post.title}
            className="rounded-2xl w-full h-full object-cover"
            height={2000}
            width={2000}
          />
        </div>
      )}
      <article className="flex flex-col items-center justify-center w-full px-6 h-full">
        <div className="mb-8 text-center">
          <time
            dateTime={post.date}
            className="mb-2 text-paragraph-sm text-black-75"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-heading-4 md:text-heading-3 lg:text-heading-2 font-extrabold leading-tight text-black-100">
            {post.title}
          </h1>
          <Link
            href={`/category/${post.category}`}
            className="text-paragraph-sm md:text-paragraph text-emerald-500"
          >
            {post.category}
          </Link>
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0 pb-8 prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </div>
  );
};

export default PostLayout;