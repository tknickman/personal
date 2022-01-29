import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getAllTags } from "./tags";
import { POST_DIRECTORY } from "../constants";
import { Post, Tag } from "../types";

const postsDirectory = join(process.cwd(), POST_DIRECTORY);

const validatePostTags = ({
  posts,
  allTags,
}: {
  posts: Array<Post>;
  allTags: Record<string, Tag>;
}) => {
  posts.forEach(({ tags, slug }) => {
    if (tags && Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (!allTags[tag.slug]) {
          throw new Error(`Tag "${tag}" (from post "${slug}") does not exist.`);
        }
      });
    }
  });
};

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostsByTag = ({ tag }: { tag: string }) => {
  const posts: Array<Post> = [];
  const allPosts = getAllPosts();
  allPosts.forEach((post) => {
    if (post.tags.some(({ slug }) => slug === tag)) {
      posts.push(post);
    }
  });
  return posts;
};

const getPostBySlug = ({
  slug,
  allTags,
}: {
  slug: string;
  allTags: Record<string, Tag>;
}): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const { tags, ...rest } = data;

  return {
    slug: realSlug,
    content,
    href: `/blog/${realSlug}`,
    tags: tags.map((tag: string) => allTags[tag]),
    ...(rest as Omit<Post, "slug" | "content" | "tags" | "href">),
  };
};

const getAllPosts = () => {
  const allTags = getAllTags();
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug({ slug, allTags }))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  // ensure all tags on posts are valid
  validatePostTags({ posts, allTags });

  return posts;
};

export { getPostSlugs, getPostBySlug, getAllPosts, getPostsByTag };
