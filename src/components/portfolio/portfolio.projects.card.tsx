import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type ProjectCardProps = {
  project: Project;
};

const PortfolioProjectsCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility when project changes
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5, rootMargin: "10px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [project]);

  return (
    <Link
      href={`/portfolio/${project.id}`}
      ref={cardRef}
      className={cn(
        "group block transition-all duration-1200 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Image wrapper */}
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-[1.02]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover w-full h-full transition-all duration-1200 ease-in-out"
        />
      </div>

      {/* Content stays square */}
      <div className="pt-6 flex items-center justify-between transition-all duration-1200 ease-in-out">
        <h3 className="font-medium text-lg xl:text-xl text-text-secondary mt-1 transition-all duration-1200 ease-in-out">
          {project.name}
        </h3>
        <p className="text-sm xl:text-base font-medium opacity-50 text-text-secondary transition-all duration-1200 ease-in-out">
          {project.category}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioProjectsCard;
