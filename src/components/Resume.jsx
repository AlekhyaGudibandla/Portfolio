import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 text-center relative overflow-hidden">
      {/* Background decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-lg"
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            My Resume
          </span>
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Take a look at my professional journey and achievements
        </motion.p>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-purple-100/50 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="aspect-[4/5] bg-gradient-to-br from-purple-50 to-pink-50 border-2 sm:border-4 border-purple-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl max-w-xs sm:max-w-sm mx-auto relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 rounded-xl sm:rounded-2xl animate-pulse"></div>
            
            <iframe
              src="https://drive.google.com/file/d/19Z22V1Y5RzZDSK5AVn1IT68Q76ucS8RU/preview"
              className="w-full h-full rounded-lg sm:rounded-xl relative z-10"
              title="Resume Preview"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://drive.google.com/file/d/19Z22V1Y5RzZDSK5AVn1IT68Q76ucS8RU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-base sm:text-lg touch-manipulation"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileAlt className="mr-2 sm:mr-3 text-lg sm:text-xl" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 