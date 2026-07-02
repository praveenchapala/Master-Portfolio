import skills from "../../data/skills";
import SkillCard from "./SkillCard";

function SkillsGrid() {
  return (
    <div
      className="
        grid
        md:grid-cols-2
        gap-8
      "
    >
      {skills.map((category) => (
        <SkillCard
          key={category.id}
          {...category}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;