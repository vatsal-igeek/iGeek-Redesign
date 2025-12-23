import Image from "next/image";
import CountUp from "../common/countUp";
import { FilledPlus } from "@/icons";

const PortfolioHero = () => {
  return (
    <section className=" my-dashed-border ">
      <div className="container py-24 px-30 flex items-center gap-24">
        <Image
          src={"/images/portfolio.hero.line.svg"}
          alt="Hero section"
          width={17}
          height={716}
        />
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[7.5rem] font-bold text-text-primary">
                Hello
              </h1>
              <p className="mt-3 font-medium text-xl leading-7 max-w-[34.813rem] text-text-secondary pl-2">
                It's iGeek - a software development company focused on building
                scalable, reliable, and innovative digital solutions. We work
                with startups, growing businesses, and enterprises to transform
                ideas into impactful products through smart design and strong
                engineering.
              </p>
            </div>
            <Image
              src={"/images/portfolio.hero.svg"}
              alt="Hero section"
              width={450}
              height={450}
            />
          </div>
          <div className="grid grid-cols-8 items-center w-full mt-15">
            <div className="flex justify-center">
              <CountUp
                from={0}
                to={200}
                duration={1}
                className="text-7xl text-text-tag font-bold"
                title="Projects Completed"
                icon={<FilledPlus />}
                titleClassName="leading-[1.875rem] text-xl font-medium"
              />
            </div>

            <div className="flex justify-center">
              <div className="h-12 w-px bg-separator-primary" />
            </div>

            <div className="flex justify-center">
              <CountUp
                from={0}
                to={100}
                duration={1}
                className="text-7xl text-text-tag font-bold"
                title="Clients Served"
                icon={<FilledPlus />}
                titleClassName="leading-[1.875rem] text-xl font-medium"
              />
            </div>

            <div className="flex justify-center items-center">
              <div className="h-12 w-px bg-separator-primary" />
            </div>

            <div className="flex justify-center">
              <CountUp
                from={0}
                to={50}
                duration={1}
                className="text-7xl text-text-tag font-bold"
                title="Professionals"
                icon={<FilledPlus />}
                titleClassName="leading-[1.875rem] text-xl font-medium"
              />
            </div>

            <div className="flex justify-center items-center">
              <div className="h-12 w-px bg-separator-primary font-medium" />
            </div>

            <div className="flex justify-center text-center ">
              <CountUp
                from={0}
                to={7}
                duration={1}
                className="text-7xl text-center text-text-tag font-bold"
                title="Years Of Experience"
                icon={<FilledPlus />}
                titleClassName="leading-[1.875rem] text-xl font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
