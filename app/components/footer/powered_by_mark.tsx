import classNames from "classnames";
import Image from "next/image";
import React from "react";

export default function PoweredByMark() {
  const mainClass = classNames(
    "p-px rounded-lg",
    "bg:transparent lg:bg-gradient-to-r from-main/15 to-main-alt/15",
    "dark:from-main-dark/15 dark:to-main-alt-dark/15"
  );

  return (
    <div className={mainClass}>
      <div
        className={classNames(
          "bg-transparent rounded-lg",
          "lg:bg-gradient-to-r from-main/13 to-main-alt/8",
          "dark:from-main-dark/13 dark:to-main-alt-dark/8"
        )}
      >
        <div className="bg-transparent lg:bg-white/5 rounded-lg px-2 flex items-center">
          <span>Powered by</span>
          <Image src="/images/absinthe.svg" width={120} height={32} alt="ABL" className="dark:hidden" />
          <Image src="/images/absinthe-dark.svg" width={120} height={32} alt="ABL" className="hidden dark:block" />
        </div>
      </div>
    </div>
  );
}
