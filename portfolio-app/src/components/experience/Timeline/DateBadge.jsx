function DateBadge({ date }) {
  return (
    <span
      className="
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-500/20
        text-cyan-300
        text-xs
        font-medium
      "
    >
      {date}
    </span>
  );
}

export default DateBadge;