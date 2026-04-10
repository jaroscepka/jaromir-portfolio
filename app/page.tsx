"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Spineo from "./components/Spineo";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="bg-white text-black">
      <Hero />
      <Spineo />
      <About />
      <Projects />
      <Contact />
      {showBackToTop && <BackToTop onClick={scrollToTop} />}
    </main>
  );
}
