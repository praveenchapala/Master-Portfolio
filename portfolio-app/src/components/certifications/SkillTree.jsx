import SkillNode from "./SkillNode";

function SkillTree() {
  const skills = [
    "Programming",
    "Testing",
    "Backend",
    "Automation",
    "AI",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className="
            flex
            flex-col
            items-center
          "
        >
          <SkillNode
            title={skill}
            last={index === skills.length - 1}
          />
        </div>
      ))}
    </div>
  );
}

export default SkillTree;