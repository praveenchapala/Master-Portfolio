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
      {/* Header */}

      <div className="text-center mb-16">
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-cyan-400
            text-sm
            mb-3
          "
        >
          Featured Work
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mt-5
            text-slate-400
            max-w-3xl
            mx-auto
            leading-8
          "
        >
          A collection of enterprise AI systems,
          automation platforms, full-stack
          applications and engineering solutions
          that demonstrate my software development
          journey.
        </p>

        <p className="mt-6 text-cyan-400 font-medium">
          Showing {visibleProjects.length} of{" "}
          {projects.featured.length} Projects
        </p>
      </div>

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

      {/* Button */}

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