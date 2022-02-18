import clsx from "clsx";
import Image from "next/image";

/*
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
*/

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: {
      name: "Article",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Example() {
  return (
    <div className="dark:bg-dark px-4 pt-8 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={clsx(
                      post.category.color,
                      "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold dark:text-gray-400">
                  {post.title}
                </p>
                <p className="mt-3 text-base dark:text-gray-200">
                  {post.description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium dark:text-gray-400">
                    {post.author.name}
                  </p>
                  <div className="flex space-x-1 text-sm dark:text-gray-200">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
