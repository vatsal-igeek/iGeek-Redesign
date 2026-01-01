import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import TextType from "../common/animation/TextType";

// SVG paths for light and dark themes
const DOTTED_PATH_LIGHT =
  "M1.5 73.5V524.5C1.5 543.278 16.7223 558.5 35.5 558.5H161.252C180.03 558.5 195.252 543.278 195.252 524.5V508C195.252 489.222 210.474 474 229.252 474H320H501.512C520.29 474 535.512 489.222 535.512 508V524.5C535.512 543.278 550.734 558.5 569.512 558.5H673.5C692.278 558.5 707.5 543.278 707.5 524.5V73.5C707.5 16.7223 692.278 1.5 673.5 1.5H570.913C555.173 1.5 542.413 14.2599 542.413 30C542.413 45.7401 529.653 58.5 513.913 58.5H423.508";
const DOTTED_PATH_DARK =
  "M1.5 73.5V524.5C1.5 543.278 16.7223 558.5 35.5 558.5H161.252C180.03 558.5 195.252 543.278 195.252 524.5V508C195.252 489.222 210.474 474 229.252 474H320H501.512C520.29 474 535.512 489.222 535.512 508V524.5C535.512 543.278 550.734 558.5 569.512 558.5H673.5C692.278 558.5 707.5 543.278 707.5 524.5V35.5C707.5 16.7223 692.278 1.5 673.5 1.5H570.913C555.173 1.5 542.413 14.2599 542.413 30C542.413 45.7401 529.653 58.5 513.913 58.5H423.508";

const ANIMATION_DURATION = 6500;
const HEADLINE_TEXT = "Let's deep dive into world of AI with";
const TOTAL_CHARACTERS = HEADLINE_TEXT.length;

const SVG_VIEWBOX = { width: 709, height: 560 };
const ARROW_TIP_X = 10.529;

const toPercent = (value: number, dimension: "x" | "y") => {
  const base = dimension === "x" ? SVG_VIEWBOX.width : SVG_VIEWBOX.height;
  return `${(value / base) * 100}%`;
};

const point = (x: number, y: number): CSSProperties => ({
  top: toPercent(y, "y"),
  left: toPercent(x, "x"),
});

type LogoPosition = Pick<CSSProperties, "top" | "bottom" | "left" | "right">;

type LogoNode = {
  id: string;
  lightSrc?: string;
  darkSrc?: string;
  filledSrc: string;
  alt: string;
  accent?: boolean;
  activationPoint: number; // percentage along path when logo activates
  position: LogoPosition;
};

const LOGOS: LogoNode[] = [
  {
    id: "logo-1",
    lightSrc: "/images/home/ai/light/logo1.svg",
    darkSrc: "/images/home/ai/dark/logo1.svg",
    filledSrc: "/images/home/ai/filled/logo1.svg",
    alt: "Logo 1",
    position: point(1, 22),
    accent: true,
    activationPoint: 3,
  },
  {
    id: "logo-2",
    lightSrc: "/images/home/ai/light/logo2.svg",
    darkSrc: "/images/home/ai/dark/logo2.svg",
    filledSrc: "/images/home/ai/filled/logo2.svg",
    alt: "Logo 2",
    position: point(1, 555),
    activationPoint: 24,
  },
  {
    id: "logo-3",
    lightSrc: "/images/home/ai/light/logo3.svg",
    darkSrc: "/images/home/ai/dark/logo3.svg",
    filledSrc: "/images/home/ai/filled/logo3.svg",
    alt: "Logo 3",
    position: point(355, 475),
    activationPoint: 40,
  },
  {
    id: "logo-4",
    lightSrc: "/images/home/ai/light/logo4.svg",
    darkSrc: "/images/home/ai/dark/logo4.svg",
    filledSrc: "/images/home/ai/filled/logo4.svg",
    alt: "Logo 4",
    position: point(708, 555),
    activationPoint: 62,
  },
  {
    id: "logo-5",
    lightSrc: "/images/home/ai/light/logo5.svg",
    darkSrc: "/images/home/ai/dark/logo5.svg",
    filledSrc: "/images/home/ai/filled/logo5.svg",
    alt: "Logo 5",
    position: point(708, 6),
    activationPoint: 85,
  },
  {
    id: "logo-6",
    lightSrc: "/images/home/ai/light/logo6.svg",
    darkSrc: "/images/home/ai/dark/logo6.svg",
    filledSrc: "/images/home/ai/filled/logo6.svg",
    alt: "Logo 6",
    position: point(397, 56),
    activationPoint: 97,
  },
];

const LOGO_WRAPPER_BASE_CLASSES =
  "absolute flex h-[var(--logo-size)] w-[var(--logo-size)] -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10 transition-all duration-500";

export default function AiAnimate() {
  const maskId = useId();
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const pathDefinition = isDark ? DOTTED_PATH_DARK : DOTTED_PATH_LIGHT;
  const baseStrokeColor = isDark ? "#3C6881" : "#E8E9EC";

  useEffect(() => {
    if (!progressPathRef.current) return;
    const totalLength = progressPathRef.current.getTotalLength();
    setPathLength(totalLength);
  }, [pathDefinition]);

  useEffect(() => {
    let animationFrame: number;
    const duration = ANIMATION_DURATION;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);
      const nextTypedIndex =
        nextProgress >= 100
          ? TOTAL_CHARACTERS
          : Math.min(
              TOTAL_CHARACTERS,
              Math.floor((nextProgress / 100) * TOTAL_CHARACTERS)
            );

      setProgress(nextProgress);
      setTypedIndex((current) =>
        nextTypedIndex > current ? nextTypedIndex : current
      );

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const effectiveLength = pathLength || 1;
  const strokeOffset = effectiveLength - (progress / 100) * effectiveLength;
  const typedText = HEADLINE_TEXT.slice(0, typedIndex);
  const remainingText = HEADLINE_TEXT.slice(typedIndex);
  const isTypingDone = typedIndex >= TOTAL_CHARACTERS;
  const showCaret = !isTypingDone;

  const arrowState = useMemo(() => {
    if (!progressPathRef.current || !pathLength) return null;
    const currentLength = (progress / 100) * pathLength;
    const point = progressPathRef.current.getPointAtLength(currentLength);
    const prevPoint = progressPathRef.current.getPointAtLength(
      Math.max(0, currentLength - 1)
    );
    const nextPoint = progressPathRef.current.getPointAtLength(
      Math.min(pathLength, currentLength + 1)
    );
    const angle =
      (Math.atan2(nextPoint.y - prevPoint.y, nextPoint.x - prevPoint.x) * 180) /
        Math.PI || 0;

    return {
      x: point.x,
      y: point.y,
      angle,
    };
  }, [progress, pathLength]);

  return (
    <section className=" my-dashed-border-top">
      <div className="mx-auto px-4 py-16 sm:py-24 flex w-full max-w-[1200px] items-center justify-center px-2 my-dashed-border-y">
        <div className="w-full max-w-240 rounded-3xl  border-[#E6E8EE] p-4 sm:p-6 lg:p-8">
          <div
            className="relative w-full aspect-709/560"
            style={
              { "--logo-size": "clamp(3rem, 12%, 7.5rem)" } as CSSProperties
            }
          >
            {/* SVG with border path and animated circle */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 709 560"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base path */}
              <path
                ref={progressPathRef}
                d={pathDefinition}
                stroke={baseStrokeColor}
                strokeWidth="3"
                strokeDasharray="11 11"
              />

              {/* Green progress path (masked for progressive fill) */}
              <path
                d={pathDefinition}
                stroke="#10B981"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="11 11"
                mask={`url(#${maskId})`}
              />

              {/* Animated arrow */}
              {arrowState && (
                <g
                  transform={`translate(${arrowState.x} ${
                    arrowState.y
                  }) rotate(${
                    arrowState.angle - 90
                  }) translate(${-ARROW_TIP_X} 0)`}
                  filter="url(#glow)"
                >
                  <path
                    d="M6.15335 17.405C8.05587 20.8457 13.0021 20.8457 14.9046 17.4049L20.4264 7.41868C22.2691 4.0862 19.8588 -0.000789642 16.0508 -0.000789642H5.00716C1.19916 -0.000789642 -1.21115 4.0862 0.631524 7.41868L6.15335 17.405Z"
                    fill="url(#arrowGradient)"
                  />
                </g>
              )}

              {/* Gradient definition & mask */}
              <defs>
                <mask id={maskId}>
                  <path
                    d={pathDefinition}
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={effectiveLength}
                    strokeDashoffset={strokeOffset}
                  />
                </mask>
                <linearGradient
                  id="arrowGradient"
                  x1="10.529"
                  y1="25.318"
                  x2="10.529"
                  y2="-0.001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2374A1" />
                  <stop offset="1" stopColor="#4EBD96" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {LOGOS.map((logo) => {
              const isActive = progress >= logo.activationPoint;
              const baseSrc = isDark
                ? logo.darkSrc ?? logo.filledSrc
                : logo.lightSrc ?? logo.filledSrc;

              return (
                <div
                  key={logo.id}
                  className={`${LOGO_WRAPPER_BASE_CLASSES} ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  style={logo.position}
                >
                  <div className="relative size-full">
                    <Image
                      src={baseSrc}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 768px) 12vw, 120px"
                      className="object-contain transition-opacity duration-500 ease-out"
                      style={{ opacity: isActive ? 0 : 1 }}
                    />
                    <Image
                      src={logo.filledSrc}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 768px) 12vw, 120px"
                      className="object-contain transition-opacity duration-500 ease-out"
                      style={{ opacity: isActive ? 1 : 0 }}
                    />
                  </div>
                </div>
              );
            })}

            <div className="absolute left-1/2 top-1/2 flex w-[70%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center z-20">
              <TextType
                text="Let's deep dive into world of AI with"
                className="xl:text-[3.75rem] text-[1rem] md:text-[2.813rem] text-text-secondary font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
