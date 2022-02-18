import clsx from "clsx";
import { getAllTags } from "../../../lib/api/tags";
import { getPostsByTag } from "../../../lib/api/posts";
import { Tag } from "../../../lib/types";
import Link from "next/link";

const TagLanding = ({ tags }: { tags: Array<Tag> }) => {
  return (
    <div>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {tags.map((tag) => (
          <Link href={tag.href} key={tag.slug} passHref>
            <li className="col-span-1 flex rounded-md shadow-sm">
              <div
                className={clsx(
                  tag.color,
                  "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                )}
              />
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-b border-r border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <h2 className="font-medium text-gray-900">{tag.title}</h2>
                  <p className="text-gray-500">{tag.posts.length} Posts</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const tags = getAllTags();
  const tagsWithPosts = Object.values(tags).map((tag) => ({
    ...tag,
    posts: getPostsByTag({ tag: tag.slug }),
  }));

  return {
    props: {
      tags: tagsWithPosts,
    },
  };
}

export default TagLanding;
