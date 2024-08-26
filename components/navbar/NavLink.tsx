"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link, title }) {
  const pathname = usePathname();

  return (
    <Link
      className={classNames("link px-3 font-semibold", "my-4 mr-2 lg:m-0", {
        "text-main-hover dark:text-main-hover-dark": pathname === link,
      })}
      href={link}
    >
      {title}
    </Link>
  );
}
