import SvgBackground from "@/components/common/svg-background";
import { useThemeMode } from "@/hooks/useThemeMode";
import { IgeekDarkLogoSvg, IgeekLightLogoSvg, MenuListSvg, MoonSvg, SunSvg } from "@/icons";

const Header = () => {
  const { isDark, toggleTheme } = useThemeMode();

  return (
    <header className="container flex justify-between items-center min-h-[4rem] lg:min-h-[6.5rem] bg-transparent px-[1.25rem] md:px-[1.875rem] lg:px-[3.75rem] xl:px-[7.5rem]">
      <SvgBackground icon={<MenuListSvg color={isDark ? "#FFFFFF" : "var(--color-icon-primary)"} />} />
      <span className="cursor-pointer">{isDark ? <IgeekDarkLogoSvg /> : <IgeekLightLogoSvg />}</span>
      <SvgBackground icon={isDark ? <SunSvg /> : <MoonSvg />} onClick={toggleTheme} />
    </header>
  );
};

export default Header;
