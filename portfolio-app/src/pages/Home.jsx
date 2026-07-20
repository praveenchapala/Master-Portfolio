import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Certifications from "../components/certifications/Certifications";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default Home;