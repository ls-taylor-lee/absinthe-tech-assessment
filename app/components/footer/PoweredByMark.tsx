import classNames from "classnames";
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
          <img src="/images/absinthe.svg" alt="ABL" className="dark:hidden w-30 h-8" />
          <img src="/images/absinthe-dark.svg" alt="ABL" className="hidden dark:block w-30 h-8" />
        </div>
      </div>
    </div>
  );
}
