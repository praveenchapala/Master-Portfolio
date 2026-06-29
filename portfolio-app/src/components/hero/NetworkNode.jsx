function NetworkNode({
  number,
  icon,
  title,
  description,
  color,
  className,
}) {
  return (
    <div
      className={`
        absolute
        w-[160px]
        h-[165px]
        bg-slate-900/80
        backdrop-blur-md
        border
        border-slate-800
        rounded-[30px]
        p-4
        shadow-xl
        flex
        flex-col
        justify-start
        items-start
        transition-all
        duration-300
        hover:scale-105
        hover:border-slate-700
        hover:shadow-cyan-500/20
        ${className}
      `}
    >
      {/* Number Badge */}
      <div
        className={`
          absolute
          -top-4
          left-1/2
          -translate-x-1/2
          w-9
          h-9
          rounded-full
          bg-slate-950
          border
          border-slate-700
          flex
          items-center
          justify-center
          font-bold
          text-base
          ${color}
        `}
      >
        {number}
      </div>

      {/* Icon */}
      <div className={`text-3xl mb-2 ${color}`}>
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`
          text-base
          font-bold
          leading-6
          mb-2
          ${color}
        `}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-xs leading-5">
        {description}
      </p>
    </div>
  );
}

export default NetworkNode;