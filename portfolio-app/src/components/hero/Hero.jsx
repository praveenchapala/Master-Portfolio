import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroImage from "./HeroImage";
import HeroCards from "./HeroCards";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-8"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* Left Side */}
        <div>
          <HeroContent />
          <HeroButtons />
          <HeroSocials />
        </div>

        {/* Right Side */}
        <div className="relative hidden lg:flex justify-center">
          <HeroImage />
          <HeroCards />
        </div>

      </div>
    </section>
  );
}

export default Hero;