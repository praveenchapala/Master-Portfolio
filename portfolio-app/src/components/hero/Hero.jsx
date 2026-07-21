import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroNetwork from "./HeroNetwork";

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
        pt-16 md:pt-8
        overflow-x-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-5
          md:px-6
          py-12 md:py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8 md:gap-12 lg:gap-20
          items-center
justify-items-center
lg:justify-items-stretch
        "
      >
        {/* Hero Network */}
        <div
          className="
            order-1
            lg:order-2
            flex
            justify-center
            items-center
          "
        >
          <HeroNetwork />
        </div>

        {/* Hero Content */}
        <div className="order-2 lg:order-1">
          <HeroContent />
          <HeroButtons />
          <HeroSocials />
        </div>
      </div>
    </section>
  );
}

export default Hero;