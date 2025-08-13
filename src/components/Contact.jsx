import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';
import contactAnimation from '../assets/contact.json';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const animationRef = useRef(null);
  const form = useRef();

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
            markers: false,
            scrub: false
          }
        }
      );

      // Animate form with simpler animations
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
            scrub: false
          }
        }
      );

      // Animate contact animation only on larger screens
      if (window.innerWidth >= 1024) {
        gsap.fromTo(animationRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            scrollTrigger: {
              trigger: animationRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
              markers: false,
              scrub: false
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_vi5ryiu12';
    const templateId = 'template_goag5fa';
    const publicKey = 'mjzAC6B3KaOaSyvOv';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: "Portfolio Contact"
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-32 w-56 h-56 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-4xl" />
        <div className="absolute bottom-24 left-24 w-36 h-36 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-8 sm:mb-10 md:mb-12 text-center tracking-wide"
        >
          <span className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl sm:shadow-2xl border border-purple-200/50"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">
              Send Me a Message
            </h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-sm sm:text-base">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm sm:text-base">
                ❌ Failed to send message. Please try again.
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base touch-manipulation"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl sm:rounded-2xl border border-purple-200">
              <h4 className="text-base sm:text-lg font-semibold text-purple-800 mb-2">Let's Work Together!</h4>
              <p className="text-gray-700 mb-3 text-xs sm:text-sm">
                I'm always excited to hear about new projects and opportunities. 
                Whether you have a specific project in mind or just want to chat about tech, 
                feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Animation - Only show on large screens */}
          <div ref={animationRef} className="hidden xl:flex items-center justify-center h-full min-h-[600px] lg:pl-32">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Lottie Animation - Only on large screens */}
              <div className="relative z-10 w-[40rem] h-[40rem]">
                <Player 
                  autoplay 
                  loop 
                  src={contactAnimation}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 