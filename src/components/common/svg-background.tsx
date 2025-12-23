import { type ReactNode, type MouseEvent, useState, useEffect } from "react";

import { useTheme } from "next-themes";

export interface SvgBackgroundType {
  icon: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const SvgBackground = ({ icon, onClick }: SvgBackgroundType) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const borderColor = isDark ? "#AEE2FF" : "#FFFFFF";
  const backgroundColor = isDark ? "rgba(174, 226, 255, 0.3)" : "#F5F9FA";

  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border"
      onClick={onClick}
      style={{
        backgroundColor,
        border: `2px solid ${borderColor}`,
        backdropFilter: "blur(20px)",
      }}
    >
      {icon}
    </div>
  );
};

export default SvgBackground;
