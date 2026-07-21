function FloatingGlow() {
  return (
    <>
      <div
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          rounded-full
          bg-cyan-500/20
          blur-[120px]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-72
          h-72
          rounded-full
          bg-fuchsia-500/20
          blur-[120px]
          animate-pulse
        "
      />
    </>
  );
}

export default FloatingGlow;