import ProjectDetail from "@/components/portfolio/detail/project.detail";
import ProjectOther from "@/components/portfolio/detail/project.other";
import PortfolioLayout from "@/layout/portfolio.layout";
import Head from "next/head";

const PortfolioDetail = () => {
  return (
    <>
      <Head>
        <title>Portfolio Detail</title>
      </Head>
      <PortfolioLayout>
        <ProjectDetail />
        <ProjectOther />
      </PortfolioLayout>
    </>
  );
};

export default PortfolioDetail;
