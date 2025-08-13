import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Autonomous Car",
      description: "An AI-powered autonomous vehicle system with computer vision and machine learning algorithms for real-time navigation and obstacle detection.",
      tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      github: "https://github.com/AlekhyaGudibandla/Autonomous-Car",
      icon: "🚗"
    },
    {
      title: "Breast Cancer Prediction",
      description: "Machine learning model for early detection of breast cancer using advanced algorithms and medical data analysis.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/AlekhyaGudibandla/Breast-cancer-prediction-model",
      icon: "🏥"
    },
    {
      title: "Diabetes Prediction Model",
      description: "Predictive analytics system for diabetes risk assessment using machine learning and healthcare data.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Healthcare"],
      github: "https://github.com/AlekhyaGudibandla/Diabetes-prediction-model",
      icon: "💊"
    },
    {
      title: "Custom Email Sender",
      description: "Automated email system with customizable templates and bulk sending capabilities for business communication.",
      tech: ["Python", "SMTP", "Email Automation", "Web Development"],
      github: "https://github.com/AlekhyaGudibandla/custom_email_sender",
      icon: "📧"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with better mobile support
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            // Better mobile support
            markers: false,
            scrub: false
          }
        }
      );

      // Animate projects with simpler, more reliable animations
      const projectElements = projectsRef.current?.children;
      if (projectElements) {
        gsap.fromTo(projectElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              // Better mobile support
              markers: false,
              scrub: false
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-32 w-56 h-56 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-4xl" />
        <div className="absolute bottom-24 left-24 w-36 h-36 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-8 sm:mb-12 md:mb-16 text-center tracking-wide"
        >
          <span className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-purple-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer touch-manipulation"
              onClick={() => handleProjectClick(project.github)}
            >
              {/* Project Icon */}
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-3 sm:mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 text-center">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-medium rounded-full border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <div className="text-center">
                <button
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:from-purple-700 group-hover:to-pink-600 active:scale-95 touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.github);
                  }}
                >
                  <span>View Project</span>
                  <svg
                    className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
