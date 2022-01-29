import { DotsVerticalIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { getAllTags } from "../../../lib/api/tags";
import { getPostsByTag } from "../../../lib/api/posts";
import { Tag } from "../../../lib/types";
import Link from "next/Link";

const TagLanding = ({ tags }: { tags: Array<Tag> }) => {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {tags.map((tag) => (
          <Link href={tag.href} key={tag.slug}>
            <li className="flex col-span-1 rounded-md shadow-sm">
              <div
                className={clsx(
                  tag.color,
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                )}
              />
              <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
                <div className="flex-1 px-4 py-2 text-sm truncate">
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
