type Author = {
  name: string;
  image: string;
};

type Tag = {
  slug: string;
  href: string;
  title: string;
  color: string;
  content: string;
  posts: Array<Post>;
};

type Post = {
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  readingTime: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: Array<Tag>;
};

export type { Post, Tag, Author };
