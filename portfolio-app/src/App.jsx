import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
    </>
  );
}

export default App;