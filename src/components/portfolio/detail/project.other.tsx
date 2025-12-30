import { Project } from "@/types/portfolio";
import projectsData from "@/data/portfolio.json";
import PortfolioProjectsCard from "../portfolio.projects.card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const ProjectOther = () => {
  const router = useRouter();
  const projects = projectsData.projects as Project[];
  return (
    <div className="py-20 container px-6 md:px-10 lg:px-10.5 xl:px-10">
      <h1 className="text-text-primary text-center font-bold text-[1.875rem] md:text-[2.625rem] lg:text-[3.625rem] xl:text-[4.375rem] mb-10">
        OTHER PROJECTS
      </h1>
      <div className="my-11.5 sm:my-12.5 xl:my-15 grid gap-10 grid-cols-1 sm:grid-cols-2 ">
        {projects.slice(0, 2).map((project) => {
          return <PortfolioProjectsCard key={project.id} project={project} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <Button 
          variant="outline" 
          className="mx-auto cursor-pointer"
          onClick={async () => {
            await router.push('/portfolio');
            // Wait for the page to load, then scroll to the section
            setTimeout(() => {
              const element = document.getElementById('projects-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        >
          View all projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectOther;
