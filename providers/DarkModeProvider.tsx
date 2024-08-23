"use client";

import { useDarkMode } from "App/hooks";
import classNames from "classnames";

export default function DarkModeProvider({ children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div id="main-content" className={classNames({ dark: isDarkMode })}>
      {children}
    </div>
  );
}
