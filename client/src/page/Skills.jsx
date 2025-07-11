// src/components/Skills.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaJava, FaCode, FaGitAlt, FaServer
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiLeetcode, 
  SiTailwindcss, SiTypescript 
} from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection) {
        const top = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'REST APIs', icon: <FaServer className="text-blue-400" /> },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'Database Design', icon: <FaDatabase className="text-indigo-500" /> },
  ];

  const dsaTopics = [
    'Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 
    'Trees & Graphs', 'Sorting Algorithms', 'Searching Algorithms',
    'Dynamic Programming', 'Recursion', 'Hash Tables', 
    'Greedy Algorithms', 'Backtracking', 'Tries'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: 'backOut',
      },
    },
    hover: { 
      y: -10,
      scale: 1.05,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      borderColor: '#3b82f6',
      boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  const dsaCardVariants = {
    hover: { 
      scale: 1.08,
      backgroundColor: 'rgba(6, 182, 212, 0.3)',
      color: '#ffffff',
      borderColor: '#06b6d4',
      boxShadow: '0 0 20px rgba(6, 182, 212, 0.7)',
      zIndex: 10,
    }
  };

  return (
    <section 
      id="skills-section" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* DeepSeek-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
      
      {/* Floating bubbles background - Increased to 30 bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
            }}
            animate={{
              y: [0, -20, 0, -30, 0],
              x: [0, 20, 0, -20, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient circles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
        />
        {/* Additional bubbles */}
        <motion.div 
          className="absolute top-1/2 left-1/3 w-56 h-56 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            opacity: [0.2, 0.25, 0.2],
            scale: [1, 1.07, 1],
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.06, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            delay: 1.5
          }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-4xl mt-8 md:text-5xl font-bold text-white mb-4">
              Technical Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Technologies I've mastered through continuous learning and practical application
          </motion.p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <FaCode className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend Development</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center cursor-default border border-gray-600"
                >
                  <div className="text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <FaServer className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">Backend & Tools</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center cursor-default border border-gray-600"
                >
                  <div className="text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Database Skills */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <FaDatabase className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">Databases</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {databaseSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariants}
                  whileHover="hover"
                  className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center cursor-default border border-gray-600"
                >
                  <div className="text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DSA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -m-16 filter blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full -m-24 filter blur-xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              delay: 1
            }}
          />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <SiLeetcode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Data Structures & Algorithms</h3>
                  <p className="text-cyan-400 font-medium">Advanced Problem Solving</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-gray-300">Currently practicing daily</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-3xl">
              I'm actively enhancing my problem-solving skills through consistent practice on platforms like LeetCode and Codeforces. 
              My focus is on mastering efficient algorithms and implementing optimized solutions for complex problems.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {dsaTopics.map((topic, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-lg text-center text-sm font-medium border border-gray-700 shadow-sm text-gray-300"
                  whileHover={dsaCardVariants.hover}
                  whileTap={{ scale: 0.95 }}
                >
                  {topic}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">500+ problems solved</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Contest rating: 1800+</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Specialized in graph algorithms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;