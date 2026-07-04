import { motion } from "framer-motion";

function HeroCards() {
  const cards = [
    {
      text: "🟢 Open to Work",
      color: "text-green-400",
      position: "top-10 -left-10",
    },
    {
      text: "🤖 Building Agentic AI Systems",
      color: "text-cyan-400",
      position: "bottom-24 -left-20",
    },
    {
      text: "🚀 15+ Projects Built",
      color: "text-purple-400",
      position: "top-52 -right-10",
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.text}
          className={`
            absolute
            ${card.position}
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-4
            shadow-xl
            backdrop-blur-xl
          `}
          animate={{
            y: [0, -8, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <p
            className={`
              ${card.color}
              font-semibold
            `}
          >
            {card.text}
          </p>
        </motion.div>
      ))}
    </>
  );
}

export default HeroCards;