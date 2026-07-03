import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Experience />
    </>
  );
}

export default App;