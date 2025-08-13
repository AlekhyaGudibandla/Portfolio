import React, { useMemo } from "react";
import { motion } from "framer-motion";
import useParallax from "../hooks/useParallax"; // Adjust path if needed

const Hero = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      scale: 1 + Math.random() * 0.5,
    }));
  }, []);

  const { rotateX, rotateY } = useParallax(0.5); // Adjust depth of effect here

  return (
    <section
      id="hero"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 min-h-screen flex justify-center items-center text-center relative overflow-hidden bg-[#5e3e8d] perspective-[1000px]"
    >
      {/* 3D Parallax background - Mobile version */}
      <div
        className="absolute inset-0 z-0 will-change-transform md:hidden"
        style={{
          backgroundImage: 'url(/phn_size_wallpaper.png)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* 3D Parallax background - Desktop version */}
      <div
        className="absolute inset-0 z-0 will-change-transform hidden md:block"
        style={{
          backgroundImage: 'url(/bg-purple.png)',
          backgroundSize: "120% 120%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* New semi-transparent black overlay to reduce bg image opacity */}
      <div className="absolute inset-0 z-5 bg-black/20" />

      {/* Darkening overlay for text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3a1e5d]/10 via-[#2a124d]/15 to-[#1e0f3b]/25" />

      {/* Subtle glowing orb behind text - responsive sizing */}
      <motion.div
        className="absolute top-[45%] left-1/2 w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] bg-gradient-to-tr from-purple-300/30 to-pink-300/30 rounded-full z-10"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle particles - responsive positioning */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] md:w-[5px] md:h-[5px] bg-white/40 rounded-full shadow-white/20 shadow-sm"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [p.scale, p.scale + 0.2, p.scale],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main content overlay for subtle gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#ffffff00] via-[#2a124d33] to-[#1e0f3b66]" />

      <motion.div
        className="relative z-30 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Alekhya Gudibandla
          </span>
        </motion.h1>

        <motion.p
          className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto mb-4 sm:mb-6 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          From messy ideas to meaningful creations
        </motion.p>

        <motion.div
          className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-sm mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.span
            className="inline-block"
            animate={{ opacity: [1.0, 1, 1.0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI Engineer • Full Stack Developer • Creative Problem Solver
          </motion.span>
        </motion.div>

        <motion.button
          className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm sm:text-base md:text-lg font-medium shadow-2xl hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Explore My Work</span>
            <span className="text-lg sm:text-xl md:text-2xl">→</span>
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator - responsive positioning */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-4 h-7 sm:w-5 sm:h-9 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-2.5 bg-white/70 rounded-full mt-1 sm:mt-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Mobile-specific touch indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 md:hidden"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/60 text-xs">
          <span className="block">Swipe up</span>
          <span className="block text-center">↑</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
