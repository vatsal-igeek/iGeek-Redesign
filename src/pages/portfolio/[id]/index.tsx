import ProjectDetail from "@/components/portfolio/detail/project.detail";
import ProjectOther from "@/components/portfolio/detail/project.other";
import PortfolioLayout from "@/layout/portfolio.layout";
import Head from "next/head";
import { useRouter } from "next/router";
import projectsData from "@/data/portfolio.json";
import { Project } from "@/types/portfolio";

const PortfolioDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const projects = projectsData.projects as Project[];
  const project = projects.find((project) => project.id === Number(id));

  const title = project ? `${project.name}` : "Portfolio Detail";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PortfolioLayout>
        <ProjectDetail />
        <ProjectOther />
      </PortfolioLayout>
    </>
  );
};

export default PortfolioDetail;
