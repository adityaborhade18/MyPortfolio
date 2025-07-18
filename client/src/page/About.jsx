import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiCode, FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import image from '../assets/aditya.jpg'

// Particle class for the interactive background
class Particle {
  constructor(x, y, size, canvas) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseSize = size;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.hue = Math.floor(Math.random() * 360);
    this.targetHue = Math.floor(Math.random() * 360);
    this.hueChangeSpeed = Math.random() * 0.5;
    this.waveOffset = Math.random() * Math.PI * 2;
    this.waveSpeed = Math.random() * 0.02 + 0.01;
    this.waveAmplitude = Math.random() * 2 + 1;
    this.pulseDirection = 1;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.maxSize = size * 1.5;
    this.minSize = size * 0.5;
  }

  update(mouse) {
    // Wave-like movement
    this.waveOffset += this.waveSpeed;
    const waveEffect = Math.sin(this.waveOffset) * this.waveAmplitude;
    
    // Particle pulsing
    this.size += this.pulseSpeed * this.pulseDirection;
    if (this.size >= this.maxSize || this.size <= this.minSize) {
      this.pulseDirection *= -1;
    }
    
    // Hue shifting
    if (Math.abs(this.hue - this.targetHue) < 1) {
      this.targetHue = Math.floor(Math.random() * 360);
    }
    this.hue += (this.targetHue - this.hue) * this.hueChangeSpeed;
    
    // Mouse interaction
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      const force = (150 - distance) / 50;
      this.speedX += dx * force * 0.01;
      this.speedY += dy * force * 0.01;
    }
    
    // Apply movement
    this.x += this.speedX + waveEffect;
    this.y += this.speedY + waveEffect;
    
    // Boundary checks with bounce effect
    if (this.x <= 0 || this.x >= this.canvas.width) {
      this.speedX *= -0.8; // Dampen on bounce
      this.x = this.x <= 0 ? 1 : this.canvas.width - 1;
    }
    if (this.y <= 0 || this.y >= this.canvas.height) {
      this.speedY *= -0.8;
      this.y = this.y <= 0 ? 1 : this.canvas.height - 1;
    }
    
    // Slow down over time
    this.speedX *= 0.99;
    this.speedY *= 0.99;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, 0.2)`;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

const About = () => {
  

  const socialLinks = [
    { icon: <FiGithub />, url: '#', label: 'GitHub' },
    { icon: <FiLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, url: '#', label: 'Twitter' },
    { icon: <FiMail />, url: '#', label: 'Email' },
  ];

  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  
  // Predefined questions and answers
  const predefinedQuestions = [
    { question: "Tell me about your journey", answer: "I started coding at 16 and have been passionate about creating digital experiences ever since. My journey has taken me through various technologies and projects, always focused on solving real problems." },
    { question: "What are your key skills?", answer: "I specialize in JavaScript, React, Node.js, and modern web development. I also have experience with UI/UX design and database management." },
    { question: "How can I contact you?", answer: "You can reach me through the contact form or via email at aditya@example.com. I'm always open to discussing new opportunities!" },
    { question: "What projects have you worked on?", answer: "I've built several web applications including e-commerce platforms, productivity tools, and interactive dashboards. Check my projects section for details!" }
  ];

  // Canvas references
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const animationRef = useRef(null);
  
  // Initialize particles
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles if canvas size changes
      if (particlesRef.current.length === 0) {
        particlesRef.current = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 5000);
        
        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 3 + 1;
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          particlesRef.current.push(new Particle(x, y, size, canvas));
        }
      }
    };
    
    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse event listeners
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleMouseDown = () => {
      mouseRef.current.isDown = true;
    };
    
    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Animation loop
    const animate = () => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)'); // Deep blue
      gradient.addColorStop(1, 'rgba(30, 41, 59, 0.8)'); // Dark indigo
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw dynamic mesh
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current);
        particle.draw();
      });
      
      // Draw connections between close particles
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw mouse interaction effect
      if (mouseRef.current.isDown) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 50, 0, Math.PI * 2);
        const radialGradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 50
        );
        radialGradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
        radialGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = radialGradient;
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Handle sending a message
  const handleSendMessage = () => {
    if (userInput.trim() === '') return;
    
    // Add user message
    const userMessage = { text: userInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setUserInput('');
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false);
      
      const question = userInput.toLowerCase();
      let response = "I'm an AI assistant here to tell you about Aditya's journey. You can ask about his skills, experience, or projects!";
      
      // Check for matching predefined questions
      for (const qa of predefinedQuestions) {
        if (question.includes(qa.question.toLowerCase())) {
          response = qa.answer;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 1500);
  };

  // Handle quick question click
  const handleQuickQuestion = (question) => {
    setUserInput(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex mt-16 flex-col min-h-screen">
      {/* Interactive Canvas Background - Fixed behind content */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 -z-10"
      />
      
      {/* Animated gradient overlays */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-6xl mx-auto">
          {/* Header Section with complex animation */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                About{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Me
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="relative w-32 h-1 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              <motion.div 
                className="absolute inset-0 bg-white rounded-full"
                animate={{ 
                  x: [-100, 100, -100],
                  opacity: [0, 0.7, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.p 
              className="mt-6 text-lg max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Get to know the person behind the code
            </motion.p>
          </motion.div>

          {/* Content Section with 3D tilt effect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Profile Image and Info */}
           <motion.div 
  className="flex flex-col items-center lg:items-start"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
  whileHover={{ 
    y: -10,
    transition: { duration: 0.3 }
  }}
>
  <div className="relative mb-8">
    {/* Animated profile container */}
    <motion.div 
      className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500/30 relative z-10"
      animate={{ 
        rotate: [0, 1, -1, 0],
        scale: [1, 1.01, 1]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity
      }}
      whileHover={{ 
        scale: 1.03,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
    >
      {/* Image container */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        {/* Replace the src with your actual image path */}
        <img 
          src={image} 
          alt="Aditya Borhade"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
    
    {/* Floating shapes with enhanced animations */}
    <motion.div 
      className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-indigo-500/20 backdrop-blur-lg"
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0],
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
      }}
    />
    
    <motion.div 
      className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-500/20 backdrop-blur-lg"
      animate={{ 
        scale: [1, 1.05, 1],
        rotate: [0, -15, 0],
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        delay: 0.5
      }}
    />
  </div>
  
  {/* Rest of your code remains unchanged */}
  <div className="text-center lg:text-left">
    <motion.h2 
      className="text-3xl font-bold text-white mb-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      Aditya Borhade
    </motion.h2>
    
    <motion.p 
      className="text-xl text-indigo-400 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
    >
      Full-Stack Developer
    </motion.p>
    
    
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-md border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-3">
            <FiGlobe className="text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="font-medium text-white">India</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-3">
            <FiCode className="text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Experience</p>
            <p className="font-medium text-white">1+ Years</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>
            
            {/* Bio Content with staggered text reveal */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg h-full border border-gray-700">
                <motion.h2 
                  className="text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  My <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Journey</span>
                </motion.h2>
                
                <motion.div 
                  className="space-y-6 text-gray-300 mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                  >
                   I'm a passionate full-stack developer with over a year of hands-on experience building modern, 
                   scalable, and user-centric web applications. My goal is simple—craft digital solutions
                    that are not only functional but intuitive and visually engaging.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 }}
                  >
                    With a solid foundation in both frontend and backend technologies,
                     I love bridging the gap between design and logic. Whether it's aligning
                      every pixel perfectly or optimizing database queries, I code with intention and precision.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6 }}
                  >
                    My journey into tech began at the age of 18, when I first started learning 
                    frontend development out of pure curiosity. What began as exploring HTML, CSS, 
                    and JavaScript quickly grew into a deep interest in how the web works. 
                    That initial spark pushed me to dive deeper into full-stack development.
                    

                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                  >
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open-source projects, or hiking in nature to recharge 
                    my creative batteries.
                  </motion.p>
                </motion.div>
                
               
               
                
                {/* Call to Action */}
                <motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.0 }}
                >
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Philosophy Section with enhanced animations */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mt-16 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.4 }}
              >
                My <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Philosophy</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Design with Purpose",
                    content: "Every design decision should serve a clear purpose and enhance the user experience.",
                    icon: "🎯",
                    color: "from-purple-500 to-indigo-500"
                  },
                  {
                    title: "Code with Passion",
                    content: "Writing code is an art form. I strive for elegance in both function and form.",
                    icon: "💻",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Continuous Growth",
                    content: "Technology evolves rapidly, and so do I. Learning is a lifelong journey.",
                    icon: "🚀",
                    color: "from-amber-500 to-orange-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-700/30 p-6 rounded-xl relative overflow-hidden border border-gray-600"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 4.6 + index * 0.2, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 15px 30px -15px rgba(99, 102, 241, 0.2)',
                      borderColor: '#6366f1',
                      transition: { duration: 0.3 }
                    }}
                   
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0`}
                      whileHover={{ 
                        opacity: 0.1,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          

        </div>
      </div>
    </div>
  );
};

export default About;