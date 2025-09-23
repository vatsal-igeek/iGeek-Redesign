import { Fragment, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Header from "./header";

import { useThemeMode } from "@/hooks/useThemeMode";
import Footer from "./footer";

const Layout = () => {
  const { isDark } = useThemeMode();

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

  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
