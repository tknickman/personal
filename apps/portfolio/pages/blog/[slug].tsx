import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api/posts";
import { getAllTags } from "../../lib/api/tags";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post } from "../../lib/types";
import CoverImage from "../../components/blog/CoverImage";
import Tag from "../../components/blog/Tag";
import { Header, Footer, Breadcrumbs } from "../../components/layout";

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
      <article className="relative py-16 overflow-hidden bg-light dark:bg-dark">
        <Head>
          <title>{`${post.title} | ${post.author.name}`}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase">
                {post.subtitle}
              </span>
              <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                {post.title}
              </span>
            </h1>
          </div>
          <div>
            {post.tags.map((tag) => (
              <Tag key={tag.slug} {...tag} />
            ))}
          </div>

          <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo dark:prose-invert">
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
