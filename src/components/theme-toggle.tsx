"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle"
      aria-label="Toggle color theme"
    >
      <Sun className="theme-toggle__sun" size={15} strokeWidth={1.4} />
      <Moon className="theme-toggle__moon" size={15} strokeWidth={1.4} />
    </button>
  );
}
