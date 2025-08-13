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
   git clone https://github.com/AlekhyaGudibandla/portfolio.git
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

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── bg-purple.png          # Desktop hero background
│   ├── phn_size_wallpaper.png # Mobile hero background
│   ├── wand-cursor.png        # Cursor effects
│   └── image.png              # Portfolio preview image
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with parallax
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Story.jsx          # About section with Lottie
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Skills.jsx         # Skills orbit animation
│   │   ├── Resume.jsx         # Resume embed
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Footer.jsx         # Footer with socials
│   │   └── Loader.jsx         # Loading screen
│   ├── hooks/
│   │   └── useParallax.js     # Parallax effect hook
│   ├── assets/
│   │   ├── coding-coffee.json # Story section Lottie
│   │   └── contact.json       # Contact section Lottie
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   └── main.jsx               # App entry point
├── index.html                 # HTML template
└── package.json               # Dependencies and scripts
```

## 🎯 Key Features Explained

### **Responsive Background Switching**
The hero section automatically switches between different background images based on screen size:
- **Mobile/Tablet**: `phn_size_wallpaper.png` (optimized for smaller screens)
- **Desktop**: `bg-purple.png` (full parallax effect)

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

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### **GitHub Pages**
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 🔧 Customization

### **Colors and Theme**
The portfolio uses a purple/pink gradient theme. To customize:
1. Update CSS variables in `src/App.css`
2. Modify gradient classes in components
3. Update theme color in `index.html`

### **Content Updates**
- **Projects**: Edit the projects array in `src/components/Projects.jsx`
- **Skills**: Modify skills arrays in `src/components/Skills.jsx`
- **Contact Info**: Update links in `src/components/Footer.jsx`
- **Personal Info**: Update text content in respective components

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

## 📞 Contact

- **Portfolio**: [alekhya-gudibandla.vercel.app](https://alekhya-gudibandla.vercel.app/)
- **GitHub**: [@AlekhyaGudibandla](https://github.com/AlekhyaGudibandla)
- **LinkedIn**: [Alekhya Gudibandla](https://www.linkedin.com/in/alekhya-gudibandla-3571b5256/)
- **Email**: [Contact via portfolio](https://alekhya-gudibandla.vercel.app/#contact)

---

⭐ **Star this repository if you found it helpful!**
