function NetworkNode({ title, className }) {
  return (
    <div
      className={`
        absolute
        w-[210px]
        h-[100px]
        bg-slate-900/80
        backdrop-blur-md
        border border-slate-800
        rounded-3xl
        px-5
        py-4
        shadow-xl
        flex
        items-center
        justify-center
        text-center
        ${className}
      `}
    >
      <p className="text-cyan-400 font-semibold text-center">
        {title}
      </p>
    </div>
  );
}

export default NetworkNode;