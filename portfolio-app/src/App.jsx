import { useEffect } from "react";
import toast from "react-hot-toast";

import { useTheme } from "./context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  // Double Click Anywhere
  useEffect(() => {
    const handleDoubleClick = () => {
      toggleTheme();

      toast.success(
        theme === "dark"
          ? "☀ Light Theme Enabled"
          : "🌙 Dark Theme Enabled"
      );
    };

    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [theme, toggleTheme]);

  return (
    <>
      {/* AI Voice */}
      <AIVoice />

      {/* Portfolio */}
      <div className="portfolio-container">

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />

      </div>
    </>
  );
}

export default App;