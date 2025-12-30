import {
  ArrowRight,
  IgeekDarkLogoSvg,
  IgeekLightLogoSvg,
  MenuListSvg,
  MoonSvg,
  SunSvg,
} from "@/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SvgBackground from "../common/svg-background";
import { Button } from "../ui/button";

export default function PortfolioHeader() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="my-dashed-border">
      <div className="container flex  justify-between items-center min-h-16 lg:min-h-26 bg-transparent px-5 md:px-7.5 lg:px-15 xl:px-30">
        <span className="cursor-pointer">
          {isDark ? <IgeekDarkLogoSvg /> : <IgeekLightLogoSvg />}
        </span>
        <div className="hidden md:flex items-center gap-5">
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer font-medium"
          >
            Back to website
          </Button>
          <Button
            variant="tag"
            size="lg"
            className="cursor-pointer  font-semibold hover:text-white"
          >
            Book a Call <ArrowRight />
          </Button>
          <SvgBackground
            icon={isDark ? <SunSvg /> : <MoonSvg />}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
}
