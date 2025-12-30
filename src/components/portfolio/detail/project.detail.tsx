import { ArrowLeft } from "@/icons";
import React from "react";
import second from "../../../../public/images/portfolio/projects/project-details.png";
import Image from "next/image";
import { useRouter } from "next/router";
import projectsData from "@/data/portfolio.json";
import { Project } from "@/types/portfolio";
import LogoLoop from "@/components/common/logo.loop";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const projects = projectsData.projects as Project[];
  const project = projects.find((project) => project.id === Number(id));
  if (!project) return null;

  return (
    <section className="my-dashed-border">
      <div className="container px-6 py-15 md:px-10 lg:px-10.5 md:py-20 xl:py-25 xl:px-30">
        <div className="flex items-center gap-2 mb-10 cursor-pointer">
          <div onClick={() => router.push("/portfolio")}>
            <ArrowLeft />
          </div>
          <p className="text-text-secondary text-xl font-medium">
            Back to projects
          </p>
        </div>
        <h1 className="xl:text-[3.75rem] text-[1.75rem] md:text-[2.813rem] lg:text-[3.125rem] leading-normal font-medium text-text-primary">
          {project.name}
        </h1>
        <Image
          src={second}
          alt="detail"
          className="my-6.5	md:my-12.5 xl:my-15"
          priority
        />

        <div dangerouslySetInnerHTML={{ __html: project.description }} />
        <h3 className="text-[1rem] mt-7.5 md:mt-12.5 xl:mt-15 md:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.875rem] text-text-primary font-semibold">
          Tech stack
        </h3>
        {project.technologies && project.technologies.length > 0 && (
          <div className="my-8">
            <LogoLoop
              logos={project.technologies.map((tech, index) => ({
                src: tech,
                alt: `Technology ${index + 1}`,
              }))}
              logoHeight={40}
              gap={100}
              speed={30}
              scaleOnHover
              fadeOut
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
