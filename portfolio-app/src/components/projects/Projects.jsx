import { useMemo, useState } from "react";

import ProjectsHeader from "./ProjectsHeader";
import ProjectTabs from "./ProjectTabs";
import ProjectGrid from "./ProjectGrid";

import projects from "../../data/projects";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  // All Projects
  const allProjects = useMemo(() => projects, []);

  // Dynamic Counts
  const counts = useMemo(() => {
    return {
      all: allProjects.length,

      automation: allProjects.filter(
        (project) => project.category === "automation"
      ).length,

      fullstack: allProjects.filter(
        (project) => project.category === "fullstack"
      ).length,

      opensource: allProjects.filter(
        (project) => project.category === "opensource"
      ).length,

      aiengineering: allProjects.filter(
        (project) => project.category === "aiengineering"
      ).length,
    };
  }, [allProjects]);

  return (
    <section
      id="projects"
      className="
        py-20
        bg-slate-950
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <ProjectsHeader />

        {/* Filter Tabs */}
        <ProjectTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          counts={counts}
        />

        {/* Project Grid */}
        <div className="mt-10">
          <ProjectGrid
            activeTab={activeTab}
            projects={allProjects}
          />
        </div>

      </div>
    </section>
  );
}

export default Projects;