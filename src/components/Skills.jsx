import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaReact, FaNode, FaDatabase, FaCss3Alt, FaHtml5, 
  FaJsSquare, FaAws, FaGitAlt, FaRProject, FaDocker, FaFigma
} from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiX, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiJest, SiExpress, SiWebrtc, SiScikitlearn, SiPytorch, SiKeras, SiPostman, SiTableau } from "react-icons/si";

const allSkills = [
  // Frontend Skills
  { icon: <FaReact />, label: "React.js", category: "Frontend" },
  { icon: <SiNextdotjs />, label: "Next.js", category: "Frontend" },
  { icon: <SiTypescript />, label: "TypeScript", category: "Frontend" },
  { icon: <SiRedux />, label: "Redux", category: "Frontend" },
  { icon: <SiJest />, label: "Jest", category: "Frontend" },
  { icon: <FaHtml5 />, label: "HTML", category: "Frontend" },
  { icon: <FaCss3Alt />, label: "CSS", category: "Frontend" },
  { icon: <FaJsSquare />, label: "JavaScript", category: "Frontend" },
  { icon: <SiTailwindcss />, label: "Tailwind", category: "Frontend" },
  
  // Backend Skills
  { icon: <FaNode />, label: "Node.js", category: "Backend" },
  { icon: <SiExpress />, label: "Express.js", category: "Backend" },
  { icon: <SiWebrtc />, label: "WebSocket", category: "Backend" },
  { icon: <FaPython />, label: "Python", category: "Backend" },
  { icon: <FaDatabase />, label: "SQL", category: "Backend" },
  { icon: <SiMongodb />, label: "MongoDB", category: "Backend" },
  
  // AI/ML Skills
  { icon: <FaPython />, label: "Python", category: "AI & ML" },
  { icon: <SiTensorflow />, label: "TensorFlow", category: "AI & ML" },
  { icon: <SiScikitlearn />, label: "Scikit-learn", category: "AI & ML" },
  { icon: <SiPytorch />, label: "PyTorch", category: "AI & ML" },
  { icon: <SiKeras />, label: "Keras", category: "AI & ML" },
  { icon: <FaRProject />, label: "R", category: "AI & ML" },
  
  // Tools
  { icon: <FaAws />, label: "AWS", category: "Tools" },
  { icon: <FaGitAlt />, label: "Git", category: "Tools" },
  { icon: <FaDocker />, label: "Docker", category: "Tools" },
  { icon: <FaFigma />, label: "Figma", category: "Tools" },
  { icon: <SiPostman />, label: "Postman", category: "Tools" },
  { icon: <SiTableau />, label: "Tableau", category: "Tools" }
];

// Curated selection of most impressive/important skills for "All" section
const curatedAllSkills = [
  { icon: <FaReact />, label: "React.js", category: "Frontend" },
  { icon: <SiNextdotjs />, label: "Next.js", category: "Frontend" },
  { icon: <SiTypescript />, label: "TypeScript", category: "Frontend" },
  { icon: <FaNode />, label: "Node.js", category: "Backend" },
  { icon: <FaPython />, label: "Python", category: "AI & ML" },
  { icon: <SiTensorflow />, label: "TensorFlow", category: "AI & ML" },
  { icon: <SiPytorch />, label: "PyTorch", category: "AI & ML" },
  { icon: <FaAws />, label: "AWS", category: "Tools" },
  { icon: <FaDocker />, label: "Docker", category: "Tools" }
];

const categories = ["All", "Frontend", "Backend", "AI & ML", "Tools"];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Animation parameters for each skill
  const animationParamsRef = useRef(
    allSkills.map(() => ({
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }))
  );

  // Get skills based on selected category
  const getSkillsForCategory = (category) => {
    if (category === "All") {
      return curatedAllSkills; // Only show curated skills in "All" section
    } else {
      return allSkills.filter((s) => s.category === category); // Show all skills in specific category
    }
  };

  const filteredSkills = getSkillsForCategory(selectedCategory);

  // Get responsive radius based on screen size
  const getRadius = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 100; // Mobile
      if (window.innerWidth < 768) return 120; // Small tablet
      if (window.innerWidth < 1024) return 150; // Tablet
      return 180; // Desktop
    }
    return 120; // Default
  };

  return (
    <section
      id="skills"
      className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[100vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Tools
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A comprehensive collection of technologies I work with to bring ideas to life
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 shadow-lg backdrop-blur-md border ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500 shadow-purple-500/25"
                  : "bg-white/70 text-purple-600 border-purple-200 hover:bg-purple-100 hover:border-purple-300"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {filteredSkills.map((skill, i) => {
            const angle = (i / filteredSkills.length) * 2 * Math.PI;
            const radius = getRadius();
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const { duration, delay } = animationParamsRef.current[i];

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredSkill(skill.label)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-700 hover:text-purple-900 cursor-pointer hover:scale-110 transition-transform"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  animation: `floatIcon ${duration}s ease-in-out ${delay}s infinite`
                }}
              >
                {skill.icon}
              </motion.div>
            );
          })}

          <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-800 font-semibold pointer-events-none">
            {hoveredSkill || "Skills"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 