import { useEffect } from 'react';
import { motion } from 'framer-motion';

const About= () => {
  // Skills data
  const skills = [
    'JavaScript', 'React', 'Node.js', 
    'Tailwind CSS', 'UI/UX Design', 'Responsive Development',
    'API Integration', 'Performance Optimization'
  ];

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.header 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.header>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              {/* Placeholder for profile image - replace with your image */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-72 md:h-72 overflow-hidden" />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 border-4 border-transparent rounded-xl animate-ping-slow" />
              <div className="absolute -inset-4 border-2 border-blue-400 rounded-xl rotate-6 animate-pulse" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            className="flex-grow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate frontend developer with 5+ years of experience creating 
                engaging digital experiences. My mission is to transform complex problems 
                into intuitive, beautiful solutions.
              </p>
              
              <p>
                With a background in both design and development, I bridge the gap between 
                aesthetics and functionality. Every pixel I place and every line of code I 
                write is crafted with purpose and precision.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or hiking in nature to recharge 
                my creative batteries.
              </p>
            </div>
            
            {/* Skills Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#3b82f6',
                      color: '#fff'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;