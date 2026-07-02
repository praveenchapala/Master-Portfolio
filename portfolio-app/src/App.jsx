import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;