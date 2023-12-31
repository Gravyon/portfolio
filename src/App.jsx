import "./App.css";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import ScrollUpArrow from "./components/ScrollUpArrow";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-2">
      <div className="main">
        <header>
          <Navbar />
        </header>
        <main>
          <section>
            <HeroSection />
          </section>
          <section id="aboutme">
            <AboutMe className="mb-2" />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <ScrollUpArrow />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
