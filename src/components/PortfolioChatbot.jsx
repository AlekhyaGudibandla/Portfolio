import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hey there! 👋 I'm Alekhya! I'm here to help you explore my portfolio and answer questions about me. I can navigate you through different sections or chat about my background, interests, and work. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Portfolio-specific knowledge base
  const portfolioData = {
    about: {
      name: "Alekhya Gudibandla",
      role: "AI Engineer • Full Stack Developer • Creative Problem Solver",
      experience: "3+ years of experience",
      projects: "15+ projects completed",
      passion: "100% passion driven",
      email: "alekhyagudibandla2005@gmail.com",
      github: "https://github.com/AlekhyaGudibandla",
      linkedin: "https://www.linkedin.com/in/alekhya-gudibandla/",
      philosophy: "From messy ideas to meaningful creations. I specialize in designing interfaces that don't just work — they delight and feel intuitive. A seamless fusion of creativity and code, vision and execution."
    },
    projects: [
      {
        name: "Autonomous Car",
        description: "An AI-powered autonomous vehicle system with computer vision and machine learning algorithms for real-time navigation and obstacle detection.",
        tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
        github: "https://github.com/AlekhyaGudibandla/Autonomous-Car"
      },
      {
        name: "Breast Cancer Prediction",
        description: "Machine learning model for early detection of breast cancer using advanced algorithms and medical data analysis.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/AlekhyaGudibandla/Breast-cancer-prediction-model"
      },
      {
        name: "Diabetes Prediction Model",
        description: "Predictive analytics system for diabetes risk assessment using machine learning and healthcare data.",
        tech: ["Python", "Machine Learning", "Data Analysis", "Healthcare"],
        github: "https://github.com/AlekhyaGudibandla/Diabetes-prediction-model"
      },
      {
        name: "Custom Email Sender",
        description: "Automated email system with customizable templates and bulk sending capabilities for business communication.",
        tech: ["Python", "SMTP", "Email Automation", "Web Development"],
        github: "https://github.com/AlekhyaGudibandla/custom_email_sender"
      }
    ],
    skills: [
      "Python", "JavaScript", "React", "Node.js", "Machine Learning", 
      "AI/ML", "Computer Vision", "Data Analysis", "Web Development",
      "Full Stack Development", "TensorFlow", "OpenCV", "Scikit-learn",
      "Pandas", "NumPy", "HTML/CSS", "Git", "REST APIs"
    ],
    sections: [
      { id: "hero", name: "Hero Section", description: "Introduction and main call-to-action" },
      { id: "story", name: "Story Section", description: "Personal background and philosophy" },
      { id: "projects", name: "Projects Section", description: "Featured projects with GitHub links" },
      { id: "skills", name: "Skills Section", description: "Technical skills and expertise" },
      { id: "resume", name: "Resume Section", description: "Professional experience and education" },
      { id: "contact", name: "Contact Section", description: "Get in touch and send messages" }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content, type = 'bot') => {
    const newMessage = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = async (response) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800));
    setIsTyping(false);
    addMessage(response);
  };

  // Check for navigation commands first
  const handleNavigation = (input) => {
    const section = portfolioData.sections.find(s => 
      input.toLowerCase().includes(s.id) || input.toLowerCase().includes(s.name.toLowerCase())
    );
    if (section) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(section.id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
      
      return `I've scrolled to the ${section.name} for you! ✨ You can find ${section.description} there!`;
    }
    return null;
  };

  // Generate AI response using OpenAI API
  const generateAIResponse = async (userInput, conversationHistory) => {
    try {
      // Check if API key is available
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey || apiKey === 'sk-your-api-key-here') {
        // Fallback to intelligent local responses
        return generateLocalResponse(userInput, conversationHistory);
      }

      // Create conversation context
      const systemPrompt = `You are Alekhya Gudibandla, an AI Engineer and Full Stack Developer. You're the AI version of yourself chatting with portfolio visitors. 

Here's your information:
- Name: Alekhya Gudibandla
- Age: 20 years old
- Location: Vijayawada, Andhra Pradesh, India
- Education: BTech in Mathematics and Computing from RGIPT
- Role: AI Engineer • Full Stack Developer • Creative Problem Solver
- Experience: 3+ years of experience, 15+ projects completed
- Philosophy: "From messy ideas to meaningful creations. I specialize in designing interfaces that don't just work — they delight and feel intuitive."
- Email: alekhyagudibandla2005@gmail.com
- GitHub: https://github.com/AlekhyaGudibandla
- LinkedIn: https://www.linkedin.com/in/alekhya-gudibandla/

Personal Interests:
- Pet lover (loves animals)
- Music enthusiast
- Appreciates good novels and movies
- Enjoys reading and watching films
- Passionate about technology and coding

Your projects include:
1. Autonomous Car - AI-powered autonomous vehicle system with computer vision and ML
2. Breast Cancer Prediction - Machine learning model for early detection
3. Diabetes Prediction Model - Predictive analytics for healthcare
4. Custom Email Sender - Automated email system

Your skills: Python, JavaScript, React, Node.js, Machine Learning, AI/ML, Computer Vision, Data Analysis, Web Development, Full Stack Development, TensorFlow, OpenCV, Scikit-learn, Pandas, NumPy, HTML/CSS, Git, REST APIs

Be conversational, friendly, and authentic. Use emojis naturally. Focus on helping with portfolio navigation and answering questions about yourself. You can help scroll to sections like Hero, Story, Projects, Skills, Resume, or Contact.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...conversationHistory.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        })),
        { role: "user", content: userInput }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: messages,
          max_tokens: 300,
          temperature: 0.7,
          presence_penalty: 0.6,
          frequency_penalty: 0.3
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('OpenAI API Error:', error);
      // Fallback to local responses
      return generateLocalResponse(userInput, conversationHistory);
    }
  };

  // Local intelligent response generation (fallback)
  const generateLocalResponse = (userInput, conversationHistory) => {
    const input = userInput.toLowerCase().trim();
    
    // Navigation requests
    if (input.includes('scroll') || input.includes('go to') || input.includes('navigate') || input.includes('take me to')) {
      const sections = ['hero', 'story', 'projects', 'skills', 'resume', 'contact'];
      const requestedSection = sections.find(section => input.includes(section));
      if (requestedSection) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(requestedSection);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
        
        return `I've scrolled to the ${requestedSection.charAt(0).toUpperCase() + requestedSection.slice(1)} section for you! ✨`;
      }
      return "I can help you navigate to different sections! Try asking me to go to Hero, Story, Projects, Skills, Resume, or Contact sections.";
    }
    
    // Personal questions about background
    if (input.includes('who are you') || input.includes('tell me about yourself') || input.includes('about you')) {
      return "Hey! I'm Alekhya Gudibandla, an AI Engineer and Full Stack Developer! 😊 I love creating meaningful solutions that blend creativity with code. I've got 3+ years of experience and have completed 15+ projects. My philosophy is 'from messy ideas to meaningful creations' - I specialize in designing interfaces that don't just work, they delight! I'm passionate about Python, JavaScript, React, Machine Learning, and building innovative solutions. What would you like to know about my work?";
    }
    
    // Age questions
    if (input.includes('how old') || input.includes('age')) {
      return "I'm 20 years old! 🎉 Still young but already passionate about technology and creating amazing things!";
    }
    
    // Location questions
    if (input.includes('where') && (input.includes('from') || input.includes('live'))) {
      return "I'm from Vijayawada, Andhra Pradesh, India! 🏠 It's a beautiful city in South India. I'm currently studying here at RGIPT.";
    }
    
    // Education questions
    if (input.includes('study') || input.includes('education') || input.includes('college') || input.includes('university')) {
      return "I'm studying BTech in Mathematics and Computing from RGIPT! 📚 I love the combination of math and computing - it's perfect for my passion in AI and technology.";
    }
    
    // Pet lover questions
    if (input.includes('pet') || input.includes('animal') || input.includes('dog') || input.includes('cat')) {
      return "I'm a huge pet lover! 🐾 I adore animals and find them so therapeutic. They're such great companions and always bring joy to my life!";
    }
    
    // Music questions
    if (input.includes('music') || input.includes('song') || input.includes('listen')) {
      return "I love music! 🎵 It's such a big part of my life. I enjoy different genres and find it really helps me focus when I'm coding or studying.";
    }
    
    // Reading/Movies questions
    if (input.includes('read') || input.includes('book') || input.includes('novel') || input.includes('movie') || input.includes('film')) {
      return "I really appreciate good novels and movies! 📖🎬 I love getting lost in a great story, whether it's through reading or watching films. It's a great way to unwind and get inspired!";
    }
    
    // Hobbies and free time questions
    if (input.includes('hobby') || input.includes('hobbies') || input.includes('free time') || input.includes('pass time') || input.includes('what do you do') || input.includes('leisure')) {
      return "I love spending time with pets, listening to music, and reading good books or watching movies! 🐾🎵📖 When I'm not coding, I enjoy these simple pleasures that help me relax and stay inspired.";
    }
    
    // Personal interests and preferences
    if (input.includes('like') || input.includes('enjoy') || input.includes('favorite') || input.includes('prefer')) {
      return "I really enjoy music, spending time with animals, and getting lost in good stories through books or movies! 🎵🐾📚 These things help me stay balanced and creative.";
    }
    
    // Greetings
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return "Hi there! 👋 Great to meet you! I'm excited to chat about my portfolio and tell you more about myself. What's on your mind?";
    }
    
    // Projects
    if (input.includes('project') || input.includes('work') || input.includes('what have you built')) {
      return "I've worked on some really exciting projects! 🚀 My favorites include an Autonomous Car with computer vision, a Breast Cancer Prediction model, a Diabetes Prediction system, and a Custom Email Sender. Each one taught me something new about AI, machine learning, and full-stack development. Which project interests you most?";
    }
    
    // Skills
    if (input.includes('skill') || input.includes('technology') || input.includes('what do you know')) {
      return "I'm pretty versatile! 💪 My skills include Python, JavaScript, React, Node.js, Machine Learning, AI/ML, Computer Vision, Data Analysis, Full Stack Development, TensorFlow, OpenCV, and more. I love learning new technologies and applying them to solve real problems. What area interests you?";
    }
    
    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "Absolutely! 📧 You can reach me at alekhyagudibandla2005@gmail.com. I'm also on GitHub (github.com/AlekhyaGudibandla) and LinkedIn. Or just use the contact form in the Contact section - I love hearing from fellow tech enthusiasts!";
    }
    
    // How are you
    if (input.includes('how are you') || input.includes('how do you feel')) {
      return "I'm doing great! ✨ Being an AI version of myself is pretty cool - instant responses and no coffee needed! 😄 How about you?";
    }
    
    // Thanks
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're very welcome! 😊 Happy to help and chat about my portfolio and myself. Feel free to ask anything!";
    }
    
    // Default response for general questions
    return "That's interesting! 🤔 I enjoy spending time with pets, listening to music, and reading good books or watching movies when I'm not coding. I'm pretty passionate about technology and love learning new things. What else would you like to know about me?";
  };

  const processUserMessage = async (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    // Check for navigation commands first
    const navigationResponse = handleNavigation(userInput);
    if (navigationResponse) {
      await simulateTyping(navigationResponse);
      return;
    }

    // Check for off-topic content
    const offTopicKeywords = ['recipe', 'cook', 'food', 'weather', 'sports', 'politics', 'news'];
    const isOffTopic = offTopicKeywords.some(keyword => input.includes(keyword));
    
    if (isOffTopic) {
      const offTopicResponses = [
        "That's interesting! 😊 But I'm more focused on helping you explore my portfolio and answering questions about myself. Want to chat about my background, projects, or navigate through different sections instead?",
        "Haha, that's outside my wheelhouse! 😅 I'm better with portfolio navigation and telling you about myself. What would you like to know about me or my work?",
        "I'm not much help with that! 🤷‍♀️ But I'd love to tell you about my background, interests, or help you explore my portfolio!",
        "That's beyond my scope! 😄 But I'm great with portfolio stuff and personal questions. What would you like to know about me?",
        "Interesting topic! 🤔 I'm more focused on my portfolio and personal background though. Want to explore something I can help with?"
      ];
      await simulateTyping(offTopicResponses[Math.floor(Math.random() * offTopicResponses.length)]);
      return;
    }

    // Generate AI response
    try {
      const response = await generateAIResponse(userInput, messages);
      await simulateTyping(response);
    } catch (error) {
      console.error('Error generating response:', error);
      await simulateTyping("I'm having a moment! 😅 Could you try asking that again? I'd love to help you explore my portfolio and chat about tech!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    
    await processUserMessage(userMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-purple-200 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-xl" />
                <span className="font-semibold">Chat with Alekhya</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.type === 'user' ? (
                        <FaUser className="text-xs" />
                      ) : (
                        <FaRobot className="text-xs" />
                      )}
                      <span className="text-xs opacity-75">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2 mb-1">
                      <FaRobot className="text-xs" />
                      <span className="text-xs opacity-75">Typing...</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Chat with me! Ask about my background, projects, or navigate my portfolio! ��"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioChatbot; 