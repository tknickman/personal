import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { TAG_DIRECTORY } from "../constants";
import { Tag } from "../types";

const tagsDirectory = join(process.cwd(), TAG_DIRECTORY);

const getTagSlugs = () => {
  return fs.readdirSync(tagsDirectory);
};

const getTagBySlug = ({ slug }: { slug: string }) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(tagsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    href: `/blog/tags/${realSlug}`,
    content,
    ...(data as Omit<Tag, "slug" | "content" | "href">),
  };
};

const getAllTags = () => {
  const slugs = getTagSlugs();
  const tagList = slugs.map((slug) => getTagBySlug({ slug }));
  const allTags: Record<string, Tag> = {};
  tagList.forEach((tag) => {
    allTags[tag.slug] = tag;
  });
  return allTags;
};

export { getAllTags, getTagBySlug, getTagSlugs };
