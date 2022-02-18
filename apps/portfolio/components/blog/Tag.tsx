import clsx from "clsx";

const Tag = ({
  color,
  title,
  href,
}: {
  color: string;
  title: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium text-gray-800",
        color
      )}
    >
      {title}
    </a>
  );
};

export default Tag;
