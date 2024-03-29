import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const CoverImage = ({
  title,
  src,
  slug,
  height,
  width,
}: {
  title: string;
  src: string;
  slug?: string;
  height: number;
  width: number;
}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={clsx("shadow-sm", {
        "transition-shadow duration-200 hover:shadow-md": slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <motion.div className="sm:mx-0" whileHover={{ scale: 1.05, rotate: 1 }}>
      {slug ? (
        <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </motion.div>
  );
};

export default CoverImage;
