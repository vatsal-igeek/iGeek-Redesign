import { useState } from "react";
import type { Project } from "@/types/portfolio";
import PortfolioProjectsCard from "./portfolio.projects.card";
import projectsData from "@/data/portfolio.json";
import { Button } from "../ui/button";
import PortfolioProjectsFilter from "./portfolio.projects.filter";

const FILTERS = [
  "All",
  "AI/Automation",
  "Website",
  "Mobile application",
  "Extension",
] as const;

const PortfolioProjects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects = projectsData.projects as Project[];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="xl:py-24 py-15 md:py-20 px-6 container lg:px-30">
      <h1 className="font-bold text-center text-[1.875rem] md:text-[3.25rem] lg:text-[3.625rem] xl:text-[4.375rem] text-text-primary mb-7.5 sm:mb-10">
        PROJECTS
      </h1>

      <PortfolioProjectsFilter
        filters={FILTERS}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />

      <div className="my-11.5 sm:my-12.5 xl:my-15 grid gap-10 grid-cols-1 sm:grid-cols-2 ">
        {filteredProjects.map((project) => (
          <PortfolioProjectsCard
            key={`${project.id}-${activeFilter}`}
            project={project}
          />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Button variant="outline" className="mx-auto cursor-pointer">
          View more
        </Button>
      </div>
    </section>
  );
};

export default PortfolioProjects;
