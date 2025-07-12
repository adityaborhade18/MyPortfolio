// src/components/ProjectsShowcase.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Airbnb Clone",
      description: "Full-stack Airbnb clone with property listings, user authentication, booking system, and admin dashboard.",
      technologies: ["MongoDB", "Express.js", "Node.js", "Tailwind CSS","Session-Auth"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      codeLink: "https://github.com/adityaborhade18/Airbnb-Booking-App"
    },
    {
      id: 2,
      title: "Grocery Store",
      description: "Full-stack e-commerce grocery platform with product catalog, cart, user profiles, and admin dashboard.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "https://grocery-delivery-app-smoky.vercel.app/",
      codeLink: "https://github.com/adityaborhade18/grocery-delivery-app"
    },
    {
      id: 3,
      title: "TodoNest",
      description: "A sleek and responsive To-Do List application built with React and styled using Tailwind CSS.",
      technologies: ["React", "Tailwind CSS"],
      category: "react",
      image: "https://media.istockphoto.com/id/1092571024/photo/to-do-list-in-notebook-with-calendar.webp?a=1&b=1&s=612x612&w=0&k=20&c=rAN0y61peU5eAvPOCByBG1moG_4GFFPMUXbEnMei8Ok=",
      demoLink: "https://grocery-delivery-app-smoky.vercel.app/",
      codeLink: "https://github.com/adityaborhade18/todo-list"
    },

    
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <motion.section 
      className="py-16 px-4  sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl mt-10 sm:text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Project <span className="text-blue-400">Showcase</span>
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my full-stack development projects featuring modern technologies and innovative solutions
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-800 rounded-full p-1 shadow-lg flex flex-wrap justify-center border border-gray-700">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('fullstack')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'fullstack' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Full Stack
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('react')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'react' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              React Projects
            </motion.button>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Features Section */}
        <motion.div 
          className="mt-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Development <span className="text-blue-400">Capabilities</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              }
              title="Database Management"
              description="Efficient data modeling with MongoDB, ensuring optimal performance and scalability."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Secure Authentication"
              description="JWT-based authentication with password encryption for secure user access."
              delay={0.2}
            />
            
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Responsive UI"
              description="Tailwind CSS powered interfaces that work seamlessly across all devices."
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        borderColor: '#60a5fa',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-56">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          initial={{ opacity: 0.8, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
        </motion.div>
        <div className="absolute top-4 right-4">
          <motion.span 
            className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white"
            whileHover={{ scale: 1.1 }}
          >
            {project.category === 'fullstack' ? 'Full Stack' : 'React'}
          </motion.span>
        </div>
        <motion.h3 
          className="absolute bottom-4 left-4 text-2xl font-bold text-white"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.title}
        </motion.h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.5 + (i * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#3b82f6",
                  color: "#fff"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <motion.a 
            href={project.demoLink}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
          <motion.a 
            href={project.codeLink}
            className="flex-1 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-4 py-2 rounded-lg font-medium transition flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#3b82f6',
              color: '#3b82f6'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-blue-500/10 border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 120
      }}
      whileHover={{ 
        y: -10,
        borderColor: '#60a5fa',
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)"
      }}
    >
      <motion.div 
        className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-400"
        whileHover={{ 
          rotate: 10,
          backgroundColor: 'rgba(59, 130, 246, 0.2)'
        }}
      >
        {icon}
      </motion.div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Project;