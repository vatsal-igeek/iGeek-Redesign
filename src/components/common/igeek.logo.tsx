import { IgeekDarkLogoSvg, IgeekLightLogoSvg } from "@/icons";
import { useTheme } from "next-themes";
import Link from "next/link";

const IGeekLogo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Link href={"/"}>
      <span className="cursor-pointer">
        {isDark ? <IgeekDarkLogoSvg /> : <IgeekLightLogoSvg />}
      </span>
    </Link>
  );
};

export default IGeekLogo;
