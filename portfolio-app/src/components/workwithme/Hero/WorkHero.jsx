import AnimatedBackground from "./AnimatedBackground";
import WorkHeroContent from "./WorkHeroContent";
import CTAButtons from "./CTAButtons";
import FloatingTech from "./FloatingTech";
import ScrollIndicator from "./ScrollIndicator";

function WorkHero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <WorkHeroContent />

        <CTAButtons />

        <FloatingTech />

        <ScrollIndicator />

      </div>
    </section>
  );
}

export default WorkHero;