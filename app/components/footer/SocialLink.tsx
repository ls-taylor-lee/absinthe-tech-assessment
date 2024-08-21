import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default function SocialLink({ src, srcDark }) {
  return (
    <div
      className={classNames("h-8 w-8", "rounded-xl", "flex items-center justify-center", "bg-el-3 dark:bg-el-3-dark")}
    >
      <Image src={src} alt={src} width={16} height={16} className="dark:hidden" />
      <Image src={srcDark} alt={src} width={16} height={16} className="hidden dark:block" />
    </div>
  );
}
