import PortfolioHeader from "@/components/portfolio/portfolio.header";
import PortfolioHero from "@/components/portfolio/portfolio.hero";
import PortfolioProjects from "@/components/portfolio/portfolio.projects";
import Head from "next/head";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <PortfolioHeader />
      <PortfolioHero />
      <PortfolioProjects />
    </>
  );
};

export default Portfolio;
