import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api/posts";
import { getAllTags } from "../../lib/api/tags";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post } from "../../lib/types";
import CoverImage from "../../components/blog/CoverImage";
import Tag from "../../components/blog/Tag";
import { Header, Footer } from "../../components/layout";

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
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
      <article className="bg-light dark:bg-dark relative overflow-hidden py-16">
        <Head>
          <title>{`${post.title} | ${post.author.name}`}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
                {post.subtitle}
              </span>
              <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </span>
            </h1>
          </div>
          <div>
            {post.tags.map((tag) => (
              <Tag key={tag.slug} {...tag} />
            ))}
          </div>

          <div className="prose prose-lg prose-indigo dark:prose-invert mx-auto mt-6 text-gray-500">
            <CoverImage
              title={post.title}
              src={post.coverImage}
              slug={post.slug}
              height={620}
              width={1240}
            />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
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
  const tags = getAllTags();
  const post = getPostBySlug({ slug: params.slug, allTags: tags });
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
