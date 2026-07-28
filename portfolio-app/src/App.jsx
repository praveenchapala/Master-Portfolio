import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import AIVoice from "./components/AIVoice";

function App() {
  return (
    <>
      {/* AI Voice */}
      <AIVoice />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;