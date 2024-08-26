"use client";

import { Moon, Sun } from "App/components/icons";
import { useDarkMode } from "App/hooks";

export default function ThemeToggleButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={(_) => toggleDarkMode()} className="p-2">
      {isDarkMode ? Sun : Moon}
    </button>
  );
}
