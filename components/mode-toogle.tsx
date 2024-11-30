"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme(); // Use resolvedTheme for SSR compatibility
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component only renders on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering until hydration is complete
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 border border-neutral-200 dark:border-white/[0.2] text-black dark:text-white bg-white dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}