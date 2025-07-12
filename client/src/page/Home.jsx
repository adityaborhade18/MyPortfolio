import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/aditya.jpg'


const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-indigo-900/30 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>
      {/* Static particles background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-indigo-500/10' : 'bg-blue-400/20'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
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
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center space-x-6"
          >
           
           
          </motion.div>
        </motion.div>
        
       
       {/* profile image */}
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
              {/* Replace this with your actual image */}
              <div className={`${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                  : 'bg-gradient-to-br from-gray-200 to-gray-300'
              } w-full h-full flex items-center justify-center overflow-hidden`}>
                <img 
                  src={image} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
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
            
          </div>
        </motion.div>

 

      </div>
      
      {/* Dark mode toggle */}
      <motion.button
        onClick={toggleDarkMode}
        className={`fixed top-30 right-14 p-3 rounded-full z-50 ${
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









      
    