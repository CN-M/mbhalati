import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const generateExcerpt = (html: string, maxLength: number = 160) => {
    const plainText = html
      .replace(/<[^>]+>/g, "")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  };

  const excerpt = generateExcerpt(post.body.html);

  return {
    title: `${post.title} | C.N. Mbhalati`,
    description: excerpt,
    openGraph: {
      images: [
        {
          url: `${post.coverImage}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const { title, category, date } = post;

  const cat = slugify(category, { lower: true });

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      {post.coverImage && (
        <div className="my-6 xl:w-4/5 w-full xl:h-[80vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] px-5 flex items-center justify-center">
          <Image
            src={post.coverImage}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
            height={2000}
            width={2000}
          />
        </div>
      )}
      <article className="flex flex-col items-center justify-center w-full px-6 h-full">
        <div className="mb-8 text-center">
          <time
            dateTime={date}
            className="mb-2 text-paragraph-sm text-black-75"
          >
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-heading-4 md:text-heading-3 lg:text-heading-2 font-extrabold leading-tight text-black-100">
            {title}
          </h1>
          <Link
            href={`/category/${cat}`}
            className="text-paragraph-sm md:text-paragraph text-emerald-500"
          >
            {category}
          </Link>
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0 pb-8 prose md:prose-lg md:leading-paragraph text-black-100"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </div>
  );
};

export default PostLayout;

export const revalidate = 60;
