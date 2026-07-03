import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedNumber({
  end,
  suffix = "",
  startAnimation,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(duration / end, 20);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 25,
      suffix: "+",
      label: "Technologies Learned",
      color: "text-violet-400",
    },
    {
      value: 15,
      suffix: "+",
      label: "Projects Built",
      color: "text-cyan-400",
    },
    {
      value: 50,
      suffix: "+",
      label: "Automations Created",
      color: "text-yellow-400",
    },
    {
      value: 3,
      suffix: "+",
      label: "Internships Completed",
      color: "text-emerald-400",
    },
  ];

  return (
    <div
      ref={ref}
      className="
        mt-20
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        rounded-[2rem]
        border
        border-slate-800
        bg-slate-950/80
        backdrop-blur-xl
        p-10
      "
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3
            className={`
              text-6xl
              font-bold
              ${stat.color}
            `}
          >
            <AnimatedNumber
              end={stat.value}
              suffix={stat.suffix}
              startAnimation={inView}
            />
          </h3>

          <p className="mt-3 text-slate-400 text-xl">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;