// export const useThemeMode = () => {
//   const dispatch = useAppDispatch();
//   const { isMode } = useAppSelector((state) => state.layout);

//   const toggleTheme = () => dispatch(toggleMode());
//   const setTheme = (mode: "light" | "dark") => dispatch(setMode(mode));

//   return { isMode, toggleTheme, setTheme };
// };

// hooks/useThemeMode.ts
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setMode, toggleMode } from "@/redux/slice/layoutSlice";

export const useThemeMode = () => {
  const dispatch = useAppDispatch();
  const { isMode } = useAppSelector((state) => state.layout);

  // convenience booleans
  const isDark = isMode === "dark";
  const isLight = isMode === "light";

  const toggleTheme = () => dispatch(toggleMode());
  const setTheme = (mode: "light" | "dark") => dispatch(setMode(mode));

  // keep <html> class + cookie in sync
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      document.cookie = "theme=dark; path=/; max-age=31536000";
    } else {
      root.classList.remove("dark");
      document.cookie = "theme=light; path=/; max-age=31536000";
    }
  }, [isDark]);

  return { isMode, isDark, isLight, toggleTheme, setTheme };
};
