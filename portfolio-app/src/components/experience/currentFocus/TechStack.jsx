import TechChip from "./TechChip";

function TechStack() {

  const stack = [
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "n8n",
    "Gemini",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  return (
    <div className="mt-10">

      <h3
        className="
          text-white
          font-semibold
          text-xl
          mb-6
        "
      >
        Current Tech Stack
      </h3>

      <div className="flex flex-wrap gap-3">

        {stack.map((item) => (
          <TechChip
            key={item}
            name={item}
          />
        ))}

      </div>

    </div>
  );
}

export default TechStack;