import Image from "next/image";
import { motion } from "motion/react";
import type { CSSProperties } from "react";

const VIEWBOX = 1000;
const PATH_BOUNDS = {
  top: 100,
  bottom: 920,
  left: 120,
  right: 870,
  radius: 60,
  bottomRadius: 150,
  curveDepth: 120,
} as const;

const toPercent = (value: number) => `${(value / VIEWBOX) * 100}%`;

const midX = (PATH_BOUNDS.left + PATH_BOUNDS.right) / 2;
const curveTopY = PATH_BOUNDS.bottom - PATH_BOUNDS.curveDepth;

const DOTTED_PATH = [
  `M ${PATH_BOUNDS.left} ${PATH_BOUNDS.top + PATH_BOUNDS.radius}`,
  `Q ${PATH_BOUNDS.left} ${PATH_BOUNDS.top} ${
    PATH_BOUNDS.left + PATH_BOUNDS.radius
  } ${PATH_BOUNDS.top}`,
  `H ${PATH_BOUNDS.right - PATH_BOUNDS.radius}`,
  `Q ${PATH_BOUNDS.right} ${PATH_BOUNDS.top} ${PATH_BOUNDS.right} ${
    PATH_BOUNDS.top + PATH_BOUNDS.radius
  }`,
  `V ${PATH_BOUNDS.bottom - PATH_BOUNDS.radius}`,
  `Q ${PATH_BOUNDS.right} ${PATH_BOUNDS.bottom} ${
    PATH_BOUNDS.right - PATH_BOUNDS.radius
  } ${PATH_BOUNDS.bottom}`,
  `H ${midX + PATH_BOUNDS.bottomRadius}`,
  `Q ${midX} ${curveTopY} ${midX - PATH_BOUNDS.bottomRadius} ${
    PATH_BOUNDS.bottom
  }`,
  `H ${PATH_BOUNDS.left + PATH_BOUNDS.radius}`,
  `Q ${PATH_BOUNDS.left} ${PATH_BOUNDS.bottom} ${PATH_BOUNDS.left} ${
    PATH_BOUNDS.bottom - PATH_BOUNDS.radius
  }`,
  "Z",
].join(" ");

const point = (x: number, y: number): CSSProperties => ({
  top: toPercent(y),
  left: toPercent(x),
});

type LogoNode = {
  id: string;
  src: string;
  alt: string;
  accent?: boolean;
  style: CSSProperties;
};

const LOGOS: LogoNode[] = [
  {
    id: "logo-1",
    src: "/images/home/logo1.png",
    alt: "Logo 1",
    style: point(PATH_BOUNDS.left, PATH_BOUNDS.top),
    accent: true,
  },
  {
    id: "logo-2",
    src: "/images/home/logo2.png",
    alt: "Logo 2",
    style: {
      bottom: "-14%",
      left: toPercent(PATH_BOUNDS.left),
    },
  },
  {
    id: "logo-3",
    src: "/images/home/logo3.png",
    alt: "Logo 3",
    style: {
      top: "85%",
      left: "50%",
    },
  },
  {
    id: "logo-4",
    src: "/images/home/logo4.png",
    alt: "Logo 4",
    style: {
      bottom: "-14%",
      left: toPercent(PATH_BOUNDS.right),
    },
  },
  {
    id: "logo-5",
    src: "/images/home/logo5.png",
    alt: "Logo 5",
    style: {
      top: "0%",
      left: toPercent(PATH_BOUNDS.right),
    },
  },
  {
    id: "logo-6",
    src: "/images/home/logo6.png",
    alt: "Logo 6",
    style: {
      top: toPercent(PATH_BOUNDS.top),
      left: toPercent(midX + 60),
    },
  },
];

export default function CurvedPathAnimation() {
  return (
    <section className="bg-[#F6F9FF] px-4 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl min-h-[620px] items-center justify-center px-2">
        <div className="relative w-full min-h-[680px] rounded-[42px]">
          <Image
            src="/images/home/border-line.svg"
            alt=""
            fill
            className="pointer-events-none object-contain"
            priority
          />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#1FC9C3] to-[#1F7BFF] shadow-[0_0_18px_rgba(42,121,255,0.35)]"
            style={{
              offsetPath: `path("${DOTTED_PATH}")`,
            }}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="absolute flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-sm z-10"
              style={logo.style}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className={`object-contain ${
                  logo.accent ? "" : "opacity-70 saturate-0"
                }`}
              />
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 flex w-[70%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center z-20">
            <p className="text-2xl font-medium text-[#0A1C35] sm:text-[28px] sm:leading-[38px]">
              Let&apos;s deep dive into{" "}
              <span className="font-semibold text-[#0A1C35]">world of AI</span>{" "}
              with
            </p>
            <div className="flex items-center justify-center gap-3 rounded-full border border-[#DCE8FF] bg-white px-6 py-3 shadow-[0_18px_46px_rgba(118,138,193,0.25)]">
              <Image
                src="/images/home/logo1.png"
                alt="OpenAI primary logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-base font-semibold text-[#132042]">
                OpenAI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
