import Image from "next/image";
import CountUp from "../common/countUp";

const PortfolioHero = () => {
  return (
    <section className="my-dashed-border">
      <div className="container md:py-20 xl:py-24  md:px-10 lg:px-10.5 xl:px-30 flex items-center md:gap-10 lg:gap-10.5 xl:gap-24">
        <Image
          src={"/images/portfolio/portfolio.hero.line.svg"}
          alt="Hero section line"
          width={17}
          height={716}
          priority
          className="hidden h-full md:block"
        />
        <div>
          <div className="flex px-10 md:px-0 flex-col-reverse md:flex-row md:gap-10.25 xl:gap-19  justify-between items-center">
            <div>
              <h1 className="text-[4.375rem] lg:text-[6.25rem] mt-14.5 md:mt-0 text-center md:text-left md:text-[5rem] font-bold text-text-primary">
                Hello
              </h1>
              <p className="mt-3 text-center md:text-left font-medium text-sm md:text-xl leading-7 md:max-w-122 xl:max-w-[34.813rem] text-text-secondary pl-2">
                It's iGeek - a software development company focused on building
                scalable, reliable, and innovative digital solutions. We work
                with startups, growing businesses, and enterprises to transform
                ideas into impactful products through smart design and strong
                engineering.
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
            <div className="mt-15  xl:aspect-5/5">
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

          <div className="flex my-dashed-border-top md:border-t-0! pt-15 mb-15 md:mb-0 flex-col md:flex-row  items-center w-full justify-between mt-15 md:mt-12.75  xl:mt-15">
            <div className="flex justify-center min-h-22 min-w-32">
              <CountUp
                from={0}
                to={200}
                duration={1}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem]  xl:text-7xl text-text-tag font-bold"
                title="Projects Completed"
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    +
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
                to={100}
                duration={1}
                className="text-[3.75rem] md:text-[3.125rem]  lg:text-[3.75rem] xl:text-7xl text-text-tag font-bold"
                title="Clients Served"
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    +
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
                to={50}
                duration={1}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-7xl text-text-tag font-bold"
                title="Professionals"
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    +
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
                to={7}
                duration={1}
                className="text-[3.75rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-7xl text-center text-text-tag font-bold"
                title="Years Of Experience"
                icon={
                  <span className="text-text-tertiary font-bold text-[3.75rem] sm:text-xl md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.375rem]">
                    +
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
