import {
  IgeekDarkLogoSvg,
  IgeekLightLogoSvg,
  MenuListSvg,
  MoonSvg,
  SunSvg,
} from "@/icons";
import { useTheme } from "next-themes";
import SvgBackground from "./common/svg-background";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";
  console.log("Current theme:", theme);
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="container flex justify-between items-center min-h-16 lg:min-h-26 bg-transparent px-5 md:px-7.5 lg:px-15 xl:px-30">
      <SvgBackground
        icon={
          <MenuListSvg
            color={isDark ? "#FFFFFF" : "var(--color-icon-primary)"}
          />
        }
      />
      <span className="cursor-pointer">
        {isDark ? <IgeekDarkLogoSvg /> : <IgeekLightLogoSvg />}
      </span>
      <SvgBackground
        icon={isDark ? <SunSvg /> : <MoonSvg />}
        onClick={toggleTheme}
      />
    </header>
  );
}
