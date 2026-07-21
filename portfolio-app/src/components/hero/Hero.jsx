import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-slate-950
        text-white
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            top-10
            left-1/2
            -translate-x-1/2

            w-[500px]
            h-[500px]

            md:w-[700px]
            md:h-[700px]

            rounded-full
            bg-cyan-500/10
            blur-[150px]
          "
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-7xl

          mx-auto

          px-5
          sm:px-6
          lg:px-8

          py-16
          md:py-20

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-12
          lg:gap-16

          items-center

          overflow-hidden
        "
      >
        {/* Left Side */}
        <div
          className="
            order-2
            lg:order-1

            w-full
          "
        >
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
            items-center

            w-full
            overflow-hidden
          "
        >
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;