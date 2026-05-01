import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out", once: true });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
