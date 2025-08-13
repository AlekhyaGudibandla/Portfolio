import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/AlekhyaGudibandla", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/alekhya-gudibandla-3571b5256/", label: "LinkedIn" },
    { icon: <SiX />, href: "https://x.com/AlekhyaGud", label: "Twitter" }
  ];

  return (
    <footer className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-center relative overflow-hidden">
      {/* Background decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <motion.div
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8 text-white text-2xl sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-white transition-colors duration-300 group p-2 sm:p-3 touch-manipulation"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              title={social.label}
            >
              <div className="relative">
                {social.icon}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p 
          className="text-purple-200 text-base sm:text-lg mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © 2025 Alekhya Gudibandla. All rights reserved.
        </motion.p>

        <motion.p
          className="text-purple-300 text-xs sm:text-sm max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Crafted with ❤️ and lots of ☕ | Turning ideas into digital reality
        </motion.p>

        <motion.a
          href="#hero"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 text-purple-300 hover:text-white text-xl sm:text-2xl transition-colors duration-300 flex items-center p-2 sm:p-3 touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          aria-label="Back to top"
        >
          <FaArrowUp />
          <span className="ml-2 hidden md:inline text-sm">Back to top</span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
