import { ArrowLeft } from "@/icons";
import React from "react";
import second from "../../../../public/images/portfolio/projects/project-details.png";
import Image from "next/image";
import { useRouter } from "next/router";
import projectsData from "@/data/portfolio.json";
import { Project } from "@/types/portfolio";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const projects = projectsData.projects as Project[];
  const project = projects.find((project) => project.id === Number(id));
  if (!project) return null;

  return (
    <section className="my-dashed-border">
      <div className="container px-6 py-15 md:px-10 lg:px-10.5 md:py-20 xl:py-25 xl:px-30">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => router.push("/portfolio")}
        >
          <ArrowLeft />
          <p className="text-text-secondary text-xl font-medium">
            Back to projects
          </p>
        </div>
        <h1 className="xl:text-[3.75rem] text-[1.75rem] md:text-[2.813rem] lg:text-[3.125rem] font-medium text-text-primary">
          Projects name
        </h1>
        <Image
          src={second}
          alt="detail"
          className="my-6.5	md:my-12.5 xl:my-15"
        />
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </section>
  );
};

export default ProjectDetail;
