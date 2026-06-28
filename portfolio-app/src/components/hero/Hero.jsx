import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <section
      id="home"
       className="min-h-screen bg-slate-950 text-white flex items-center pt-6"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <HeroContent />
        <HeroButtons />
        <HeroSocials />
      </div>
    </section>
  );
}

export default Hero;