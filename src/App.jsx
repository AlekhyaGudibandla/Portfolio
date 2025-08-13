/*
  🌸 Alekhya's Fantasy Portfolio (Component-Based Version)
  Features:
  - Modular component architecture
  - Parallax Hero with purple background
  - Transparent Navbar with dynamic colors
  - Skills Orbit with original animation
  - Resume embed
  - Footer with socials and scroll-to-top
  - Botpress AI Chatbot integration
  - Loading Screen with progress tracking
*/

import React, { useState, useEffect } from "react";
import CursorSparkle from "./components/CursorSparkle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./App.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeTop = document.querySelector("#hero")?.getBoundingClientRect()?.top;
      setScrolled(window.scrollY > 100 && homeTop < -200);
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef6f9] via-[#f2f3ff] to-[#f4f9ff] text-gray-800 font-sans scroll-smooth overflow-x-hidden">
      <CursorSparkle />
      <Navbar scrolled={scrolled} />
      <Hero parallax={parallax} />
      <Story />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
