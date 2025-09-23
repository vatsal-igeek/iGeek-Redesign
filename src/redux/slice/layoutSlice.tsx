import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  isMenuOpen: boolean;
  isMode: "light" | "dark";
}

const getInitialMode = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";

  const cookieTheme = document.cookie.split("; ").find((row) => row.startsWith("theme="))?.split("=")[1];

  if (cookieTheme === "dark") return "dark";
  if (cookieTheme === "light") return "light";

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const initialState: LayoutState = {
  isMenuOpen: false,
  isMode: getInitialMode(),
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMode: (state, action) => {
      state.isMode = action.payload;
      document.cookie = `theme=${action.payload}; path=/; max-age=31536000`;
    },
    toggleMode: (state) => {
      state.isMode = state.isMode === "light" ? "dark" : "light";
      document.cookie = `theme=${state.isMode}; path=/; max-age=31536000`;
    },
  },
});

export const { toggleMenu, setMode, toggleMode } = layoutSlice.actions;
export default layoutSlice.reducer;
