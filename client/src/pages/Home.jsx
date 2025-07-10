 import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/react.svg'; 

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-[calc(100vh-120px)] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* 👨‍💻 Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Hey, I'm <span className="text-indigo-600 dark:text-indigo-400">Aditya Borhade</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A Full-Stack Developer focused on building scalable, modern web apps with smooth user experience. Passionate about solving real-world problems through code.
          </p>

          <div className="flex gap-4 flex-wrap mt-4">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* 🖼 Profile Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 shadow-lg border-4 border-indigo-600">
            <img
              src={profileImage}
              alt="Aditya Borhade"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 
