import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import projects from "../../data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const initialProjects = 4;

  const visibleProjects = showAll
    ? projects.featured
    : projects.featured.slice(0, initialProjects);

  return (
    <section>
      {/* Projects */}

      <div className="space-y-12">
        {visibleProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            {...project}
            index={index}
          />
        ))}
      </div>

      {/* View More Button */}

      {projects.featured.length > initialProjects && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              text-cyan-300
              font-semibold
              transition-all
              duration-300
              hover:bg-cyan-500/20
              hover:scale-105
            "
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                View More Projects
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;