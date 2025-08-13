# 🚀 Alekhya Gudibandla - Portfolio

A modern, responsive portfolio website showcasing my skills as an AI Engineer and Full Stack Developer. Built with React, TailwindCSS, and modern web technologies.

## ✨ Features

### 🎨 **Visual Design**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Glassmorphism effects, smooth animations, and elegant typography
- **Loading Screen** - Beautiful animated loader with progress tracking
- **Parallax Effects** - Interactive background animations

### 🛠️ **Technical Stack**
- **Frontend**: React 19, TailwindCSS 4, Framer Motion
- **Animations**: GSAP, Framer Motion, CSS animations
- **3D Graphics**: Three.js (for future enhancements)
- **Email**: EmailJS for contact form functionality
- **AI Chatbot**: Botpress integration for interactive navigation

### 📱 **Responsive Sections**
- **Hero Section** - Dynamic background switching (mobile/desktop)
- **Story Section** - Lottie animations (hidden on mobile for performance)
- **Projects Section** - Clickable cards with GSAP animations
- **Skills Section** - Orbiting skill icons with category filtering
- **Contact Section** - Functional email form with Lottie animation
- **Footer** - Social links and scroll-to-top functionality

### 🤖 **AI Integration**
- **Botpress Chatbot** - Interactive AI assistant for portfolio navigation
- **Smart Responses** - Context-aware answers about skills and projects
- **Navigation Help** - Smooth scrolling to different sections

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlekhyaGudibandla/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env file for EmailJS (optional)
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```


## 🎯 Key Features Explained


### **Skills Orbit Animation**
- **Curated "All" Section**: Shows only the most impressive skills
- **Category Filters**: Display all skills when specific categories are selected
- **Responsive Radius**: Orbit size adjusts based on screen size

### **Performance Optimizations**
- **Image Preloading**: All critical images are preloaded before showing content
- **Conditional Rendering**: Heavy animations (Lottie) are hidden on mobile
- **Lazy Loading**: Components load only when needed
- **Touch Optimization**: Mobile-friendly interactions

### **AI Chatbot Integration**
- **Botpress Integration**: Professional chatbot for portfolio navigation
- **Smart Navigation**: Smooth scrolling to different sections
- **Context Awareness**: Answers questions about skills and projects


### **Animations**
- **GSAP**: Used in Projects and Contact sections
- **Framer Motion**: Used in Navbar, Hero, and other components
- **CSS Animations**: Custom keyframes in `src/App.css`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


⭐ **Star this repository if you found it helpful!**
