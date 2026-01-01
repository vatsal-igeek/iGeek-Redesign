import { useRef } from "react";
import { useInView } from "motion/react";
import Image from "next/image";
import CountUp from "../common/countUp";
import portfolioData from "../../data/portfolio.json";

const { hero } = portfolioData;

const PortfolioHero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      className="
    my-dashed-border
    bg-no-repeat
    bg-right
    bg-contain
    md:bg-[url('/images/portfolio/portfolio.hero.bg.svg')]
    md:in-data-[theme='dark']:bg-[url('/images/portfolio/portfolio.hero.bg.dark.svg')]
  "
    >
      <div className="container md:py-20 xl:py-24  md:px-10 lg:px-10.5 xl:px-30 flex items-center md:gap-10 lg:gap-10.5 xl:gap-24">
        <Image
          src="/images/portfolio/portfolio.hero.line.svg"
          alt="Hero section line"
          width={17}
          height={716}
          priority
          className="hidden md:block in-data-[theme='dark']:md:hidden"
        />

        <Image
          src="/images/portfolio/portfolio.hero.line.dark.svg"
          alt="Hero section line (dark mode)"
          width={17}
          height={716}
          priority
          className="hidden in-data-[theme='dark']:md:block"
        />
        <div>
          <div className="flex px-10 md:px-0 flex-col-reverse md:flex-row md:gap-10.25 xl:gap-19  justify-between items-center  bg-[url('/images/portfolio/mobile/portfolio.hero.bg.svg')] bg-no-repeat bg-right bg-contain in-data-[theme='dark']:bg-[url('/images/portfolio/mobile/portfolio.hero.bg.dark.svg')]">
            <div>
              <h1 className="text-[4.375rem] lg:text-[6.25rem] mt-14.5 md:mt-0 text-center md:text-left md:text-[5rem] leading-normal font-bold text-text-primary">
                {hero.title}
              </h1>
              <p className="mt-3 text-center  md:text-left font-medium text-sm md:text-xl leading-7.5 md:max-w-122 xl:max-w-[34.813rem] text-text-secondary pl-2">
                {hero.description}
              </p>
              <Image
                src={"/images/portfolio/portfolio.mobile.hero.line.png"}
                width={500} // Provide a large enough number for image optimization breakpoints
                height={0} // Or set to 0 to indicate dynamic height
                alt="Hero section line"
                priority
                className="w-full mt-6 h-auto block md:hidden"
              />
            </div>
            <div className="mt-15  xl:aspect-5/5 ">
              <Image
                src={"/images/portfolio/portfolio.hero.svg"}
                alt="Hero section"
                width={450}
                height={450}
                priority
                className="w-[12.188rem] h-49.5 md:h-full md:w-full"
              />
            </div>
          </div>

          <div
            ref={statsRef}
            className="flex my-dashed-border-top md:border-t-0! pt-15 mb-15 md:mb-0 flex-col md:flex-row  items-center w-full justify-between mt-15 md:mt-12.75  xl:mt-15"
          >
            <div className="flex justify-center min-h-22 min-w-32">
              <CountUp
                from={0}
                to={hero.stats[0].value}
                duration={1}
                startWhen={statsInView}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem]  xl:text-7xl text-text-counter font-bold"
                title={hero.stats[0].label}
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    {hero.stats[0].symbol}
                  </span>
                }
                titleClassName="text-center md:text-left leading-[1.875rem] text-sm lg:text-lg xl:text-xl font-medium text-text-secondary"
              />
            </div>

            <div className="flex justify-center my-7 md:my-0 items-center">
              <div className="h-px w-12 md:h-12 md:w-px bg-separator-primary" />
            </div>

            <div className="flex justify-center min-h-22 min-w-32">
              <CountUp
                from={0}
                to={hero.stats[1].value}
                duration={1}
                startWhen={statsInView}
                className="text-[3.75rem] md:text-[3.125rem]  lg:text-[3.75rem] xl:text-7xl text-text-counter font-bold"
                title={hero.stats[1].label}
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    {hero.stats[1].symbol}
                  </span>
                }
                titleClassName="text-center md:text-left leading-[1.875rem] text-sm lg:text-lg xl:text-xl font-medium text-text-secondary"
              />
            </div>

            <div className="flex justify-center my-7 md:my-0 items-center">
              <div className="h-px w-12 md:h-12 md:w-px bg-separator-primary" />
            </div>

            <div className="flex justify-center min-h-22 min-w-32">
              <CountUp
                from={0}
                to={hero.stats[2].value}
                duration={1}
                startWhen={statsInView}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-7xl text-text-counter font-bold"
                title={hero.stats[2].label}
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    {hero.stats[2].symbol}
                  </span>
                }
                titleClassName="text-center md:text-left leading-[1.875rem] text-sm lg:text-lg xl:text-xl font-medium text-text-secondary"
              />
            </div>

            <div className="flex justify-center my-7 md:my-0 items-center">
              <div className="h-px w-12 md:h-12 md:w-px bg-separator-primary" />
            </div>

            <div className="flex justify-center min-h-22 min-w-32 text-center">
              <CountUp
                from={0}
                to={hero.stats[3].value}
                duration={1}
                startWhen={statsInView}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-7xl text-center text-text-counter font-bold"
                title={hero.stats[3].label}
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    {hero.stats[3].symbol}
                  </span>
                }
                titleClassName="text-center md:text-left leading-[1.875rem] text-sm lg:text-lg xl:text-xl font-medium text-text-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
