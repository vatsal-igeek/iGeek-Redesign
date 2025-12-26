import { Project } from "@/types/portfolio";
import React from "react";
import projectsData from "@/data/portfolio.json";
import PortfolioProjectsCard from "../portfolio.projects.card";
import { Button } from "@/components/ui/button";

const ProjectOther = () => {
  const projects = projectsData.projects as Project[];
  return (
    <div className="py-20 container px-6 md:px-10 lg:px-10.5 xl:px-10">
      <h1 className="text-text-primary text-center font-bold text-[1.875rem] md:text-[2.625rem] lg:text-[3.625rem] xl:text-[4.375rem] mb-10">
        Other Projects
      </h1>
      <div className="my-11.5 sm:my-12.5 xl:my-15 grid gap-10 grid-cols-1 sm:grid-cols-2 ">
        {projects.slice(0, 2).map((project) => {
          return <PortfolioProjectsCard key={project.id} project={project} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <Button variant="outline" className="mx-auto cursor-pointer">
          View all projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectOther;
