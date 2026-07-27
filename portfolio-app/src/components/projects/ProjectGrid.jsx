import { useState, useEffect } from "react";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectGrid({ activeTab, projects }) {
  const [showAll, setShowAll] = useState(false);

  // Reset when switching tabs
  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  // Filter projects
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeTab
        );

  // Show only first 3 initially
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  // Empty State
  if (filteredProjects.length === 0) {
  const emptyState = {
    aiengineering: {
      title: "🚀 AI Engineering Projects",
      description:
        "I'm currently building enterprise-grade AI Engineering projects focused on Multi-Agent Systems, MCP, RAG, LLM Evaluation and AI Infrastructure.",
    },

    fullstack: {
      title: "💻 Full Stack Projects",
      description:
        "More full-stack applications are currently under development and will be added soon.",
    },

    automation: {
      title: "⚙️ Automation Projects",
      description:
        "New workflow automation projects are coming soon.",
    },

    opensource: {
      title: "🌍 Open Source Projects",
      description:
        "I'm actively contributing to open source. More repositories will be added soon.",
    },
  };

  const content =
    emptyState[activeTab] || {
      title: "No Projects Found",
      description: "Projects for this category will be added soon.",
    };

  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl font-bold text-white">
        {content.title}
      </h2>

      <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
        {content.description}
      </p>
    </div>
  );
}
  return (
    <>
      <div className="space-y-16">
        {visibleProjects.map((project, index) =>
          project.featured ? (
            <FeaturedProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ) : (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          )
        )}
      </div>

      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-8
              py-4
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/30
              text-cyan-300
              flex
              items-center
              gap-3
              hover:bg-cyan-500/20
              transition-all
            "
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                View More Projects
                <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default ProjectGrid;