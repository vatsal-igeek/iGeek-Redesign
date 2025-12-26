import PortfolioHero from "@/components/portfolio/portfolio.hero";
import PortfolioProjects from "@/components/portfolio/portfolio.projects";
import PortfolioLayout from "@/layout/portfolio.layout";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <PortfolioLayout>
        <PortfolioHero />
        <PortfolioProjects />
      </PortfolioLayout>
    </>
  );
};

export default Portfolio;
