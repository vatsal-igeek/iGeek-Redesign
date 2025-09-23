import type { ReactNode, MouseEvent } from "react";

import { useThemeMode } from "@/hooks/useThemeMode";

export interface SvgBackgroundType {
  icon: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const SvgBackground = ({ icon, onClick }: SvgBackgroundType) => {
  const { isDark } = useThemeMode();

  // Determine border color based on theme
  const borderColor = isDark ? "#AEE2FF" : "#FFFFFF";
  const backgroundColor = isDark ? "rgba(174, 226, 255, 0.3)" : "#F5F9FA";

  return (
    <div
      className="w-[2.75rem] h-[2.75rem] rounded-full flex items-center justify-center cursor-pointer border"
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
