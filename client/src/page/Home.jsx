import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const socialLinks = [
    { icon: <FiGithub />, url: '#', color: 'hover:text-gray-400' },
    { icon: <FiLinkedin />, url: '#', color: 'hover:text-blue-500' },
    { icon: <FiTwitter />, url: '#', color: 'hover:text-cyan-400' },
    { icon: <FiMail />, url: '#', color: 'hover:text-red-400' },
  ];

  return (
    <div className={`min-h-screen flex  items-center justify-center px-4 sm:px-6 transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-indigo-900/30 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-indigo-500/10' : 'bg-blue-400/20'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-2 mt-18 ${
              darkMode 
                ? 'bg-indigo-500/20 text-indigo-300' 
                : 'bg-indigo-100 text-indigo-600'
            }`}
          >
            Full-Stack Developer
          </motion.div>
          
          <motion.h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hey, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Aditya Borhade
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl mb-10 max-w-2xl ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build modern, responsive web applications with cutting-edge technologies. 
            Passionate about creating intuitive user experiences and scalable solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30' 
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500 hover:shadow-lg hover:shadow-blue-400/30'
              } text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium border transition-all ${
                darkMode 
                  ? 'border-indigo-500 hover:bg-indigo-500/20' 
                  : 'border-indigo-500 text-indigo-600 hover:bg-indigo-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center space-x-6"
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`text-2xl ${darkMode ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-400 hover:text-indigo-500'} transition-colors`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className={`h-px flex-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Based in India</div>
          </motion.div>
        </motion.div>
        
        {/* Profile image */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className={`w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-indigo-500/30' : 'border-indigo-400/30'
            } relative z-10`}>
              <div className={`${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                  : 'bg-gradient-to-br from-gray-200 to-gray-300'
              } w-full h-full flex items-center justify-center`}>
                <div className="bg-gray-400 border-2 border-dashed rounded-full w-48 h-48 md:w-56 md:h-56" />
              </div>
            </div>
            
            <motion.div 
              className={`absolute -top-6 -right-6 w-32 h-32 rounded-full ${
                darkMode ? 'bg-indigo-500/20' : 'bg-indigo-400/20'
              } backdrop-blur-lg`}
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <motion.div 
              className={`absolute -bottom-8 -left-8 w-40 h-40 rounded-full ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-400/20'
              } backdrop-blur-lg`}
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            
            <div className="absolute -bottom-6 -right-6 z-20">
              <motion.div 
                className={`p-4 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800/80 backdrop-blur-md' 
                    : 'bg-white/80 backdrop-blur-md'
                } shadow-lg`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    darkMode ? 'bg-green-400' : 'bg-green-500'
                  }`}></div>
                  <span className={darkMode ? 'text-green-400' : 'text-green-600'}>
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className={`mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Scroll to explore
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown className={`mx-auto text-xl ${
            darkMode ? 'text-indigo-400' : 'text-indigo-500'
          }`} />
        </motion.div>
      </motion.div>
      
      {/* Dark mode toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className={`fixed top-48 right-14 p-3 rounded-full z-50 ${
          darkMode 
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        {darkMode ? '☀️' : '🌙'}
      </motion.button>
    </div>
  );
};

export default Home;