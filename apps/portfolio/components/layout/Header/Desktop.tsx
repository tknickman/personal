import { DarkModeToggle } from "@tek/ui";
import Link from "next/link";

import { NAVIGATION } from "./constants";

const Desktop = () => (
  <div className="hidden md:block">
    {NAVIGATION.map((link) => (
      (<Link
        key={link.name}
        href={link.href}
        passHref
        className="decoration-dark ml-6 text-sm decoration-double decoration-4 underline-offset-4 hover:underline sm:text-base">

        {link.name}

      </Link>)
    ))}
    <div className="ml-4 inline-block">
      <DarkModeToggle size={14} />
    </div>
  </div>
);

export default Desktop;
