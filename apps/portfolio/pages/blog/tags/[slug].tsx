import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getTagBySlug, getAllTags } from "../../../lib/api/tags";
import { getPostsByTag } from "../../../lib/api/posts";
import markdownToHtml from "../../../lib/markdownToHtml";
import { Tag } from "../../../lib/types";
import { Header, Footer } from "../../../components/layout";
import { NewspaperIcon } from "@heroicons/react/outline";
import Link from "next/link";

type Props = {
  tag: Tag;
};

const Tag = ({ tag }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !tag?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Header layout="blog" />
      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-800 pb-32">
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              {tag.title}
            </h1>
            <div
              className="mt-6 max-w-3xl text-xl text-gray-300"
              dangerouslySetInnerHTML={{ __html: tag.content }}
            />
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-16 lg:gap-x-8">
            {tag.posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    <NewspaperIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {post.subtitle}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">{post.excerpt}</p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                      Read now<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const tag = getTagBySlug({ slug: params.slug });
  const posts = getPostsByTag({ tag: tag.slug });
  const content = await markdownToHtml(tag.content || "");

  return {
    props: {
      tag: {
        ...tag,
        content,
        posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => {
      return {
        params: {
          slug: tag,
        },
      };
    }),
    fallback: false,
  };
}

export default Tag;
