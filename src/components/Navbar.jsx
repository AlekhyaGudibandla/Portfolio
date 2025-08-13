import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome, FaUserAstronaut, FaWrench, FaFolderOpen,
  FaPaperPlane, FaFileAlt, FaBars, FaTimes
} from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "Home", icon: <FaHome /> },
  { href: "#story", label: "Story", icon: <FaUserAstronaut /> },
  { href: "#skills", label: "Skills", icon: <FaWrench /> },
  { href: "#projects", label: "Projects", icon: <FaFolderOpen /> },
  { href: "#contact", label: "Contact", icon: <FaPaperPlane /> },
  { href: "#resume", label: "Resume", icon: <FaFileAlt /> }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [inHeroSection, setInHeroSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInHeroSection(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector("#hero");
    if (heroSection) observer.observe(heroSection);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const textColor = inHeroSection ? "text-white" : "text-purple-700";
  const underlineClass = inHeroSection ? "underline-hover-white" : "underline-hover-purple";

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-500 bg-transparent"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center ${
          scrolled ? 'max-w-6xl' : 'max-w-7xl'
        }`}>
          {/* Branding */}
          <motion.h1 
            className={`tracking-wide font-extrabold text-2xl sm:text-3xl md:text-4xl font-serif drop-shadow-lg transition-colors duration-300 ${textColor}`}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AG
          </motion.h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
            {navLinks.map((link, i) => (
              <motion.li 
                key={i} 
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <a href={link.href} className="flex flex-col items-center relative">
                  {scrolled ? (
                    <motion.div 
                      className={`group text-xl lg:text-2xl transition-transform duration-300 cursor-pointer ${textColor} group-hover:scale-125`}
                      whileHover={{ rotate: 5 }}
                    >
                      {link.icon}

                      {/* Tooltip on hover */}
                      <span 
                        className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-3 py-1 rounded-full text-xs shadow-md whitespace-nowrap z-50 ${
                          inHeroSection 
                            ? 'bg-black/30 backdrop-blur-md text-white' 
                            : 'bg-white/90 text-purple-700'
                        }`}
                      >
                        {link.label}
                      </span>
                    </motion.div>
                  ) : (
                    <span className={`text-base font-medium cursor-pointer ${textColor}`}>
                      <span className={underlineClass}>{link.label}</span>
                    </span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-button md:hidden p-3 rounded-lg transition-all duration-300 hover:bg-purple-100/20 bg-purple-600/10 backdrop-blur-sm"
            onClick={handleMobileMenuToggle}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-purple-700 text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-purple-700 text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-md shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-center items-center p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-purple-700">Menu</h2>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={handleNavLinkClick}
                        className="flex items-center space-x-4 p-3 rounded-xl hover:bg-purple-50 transition-all duration-300 group"
                      >
                        <div className="text-2xl text-purple-600 group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <span className="text-lg font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Alekhya Gudibandla</p>
                  <p className="text-xs text-gray-500">AI Engineer & Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
