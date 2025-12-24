import React from "react";
import { Button } from "../ui/button";

type ProjectFilterProps = {
  filters: readonly string[];
  activeFilter: string;
  onChange: (filter: string) => void;
};

const PortfolioProjectsFilter: React.FC<ProjectFilterProps> = ({
  filters,
  activeFilter,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <Button
            key={filter}
            variant="toggle"
            isActive={isActive}
            size="sm"
            onClick={() => onChange(filter)}
            className="md:min-w-39 text-xs md:text-sm cursor-pointer"
          >
            {filter}
          </Button>
        );
      })}
    </div>
  );
};

export default PortfolioProjectsFilter;
