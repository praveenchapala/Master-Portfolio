import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-20
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Left Side */}

        <div className="order-2 lg:order-1">
          <HeroContent />

          <HeroButtons />

          <HeroSocials />
        </div>

        {/* Right Side */}

        <div
          className="
            order-1
            lg:order-2
            flex
            justify-center
          "
        >
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;