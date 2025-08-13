import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation.json";

const Story = () => {
  return (
    <section
      id="story"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background blobs - hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 right-32 w-56 h-56 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-4xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-24 left-24 w-36 h-36 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.35, 0.65, 0.35],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-8 sm:mb-12 md:mb-16 text-center tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent">
            My Story
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left: Story content - Made wider */}
          <motion.div
            className="order-2 xl:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 shadow-2xl sm:shadow-3xl border border-purple-200/60"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 40px rgba(128, 90, 213, 0.25)" }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed font-light space-y-4 max-w-none text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I've always been someone who thinks deeply and builds with intention.
                <br />
                What began as pages of curious notes has blossomed into impactful{" "}
                <span className="text-purple-800 font-semibold">AI tools</span> and meticulously crafted{" "}
                <span className="text-purple-800 font-semibold">digital experiences</span>.
                <br />
                <br />
                I specialize in designing interfaces that don't just work — they delight and feel intuitive. A seamless fusion of creativity and code, vision and execution.
                <br />
                <br />
                Every project is guided by a simple mantra:{" "}
                <span className="text-purple-800 font-semibold">
                  solve real problems, humanize technology, and keep evolving.
                </span>
                <br />
                Because to me, truly great technology is more than just smart — it's meaningful.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "3+", label: "Years Experience", icon: "🚀" },
                  { number: "15+", label: "Projects Completed", icon: "✨" },
                  { number: "100%", label: "Passion Driven", icon: "💫" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-300 shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(131, 58, 180, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-800 mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-semibold text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Animation Display - Only show on larger screens */}
          <motion.div
            className="order-1 xl:order-2 flex justify-center items-center hidden xl:flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Lottie Animation - Only on large screens */}
              <div className="relative z-10 w-[32rem] h-[32rem]">
                <Player
                  autoplay
                  loop
                  src={animation}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
