"use client";

import React from "react";
import { IMiniBadge } from "../types/global";
import classNames from "classnames";

export default function MiniBadge({ children, type, pointer }: IMiniBadge) {
  const classForType = () => {
    switch (type) {
      case "success":
        return `bg-success/10 dark:bg-success-dark/10 text-success dark:text-success-dark`;
      case "secondary":
        return `bg-el-3 dark:bg-el-3-dark text-secondary dark:text-secondary-dark`;
      default:
    }
  };

  return (
    <div
      className={classNames(
        "font-medium text-xs px-2 py-1 rounded-full w-fit",
        { "cursor-pointer": pointer },
        classForType()
      )}
    >
      {children}
    </div>
  );
}
