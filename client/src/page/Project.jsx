import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Airbnb Clone",
    description: "A full-featured Airbnb clone with user authentication, property listings, filtering, booking system, and integrated map view.",
    image: "/airbnb-preview.jpg", // Replace with actual image path
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT", "Mapbox"],
    liveLink: "https://airbnb-clone-demo.vercel.app",
    githubLink: "https://github.com/Aditya-Borhade/airbnb-clone",
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce platform with product listings, cart, checkout, order management, and responsive UI.",
    image: "/ecommerce-preview.jpg", // Replace with actual image path
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://grocery-delivery-app-smoky.vercel.app",
    githubLink: "https://github.com/Aditya-Borhade/grocery-delivery-app",
  },
];

const Projects = () => {
  return (
    <section className=" mt-16 py-20 px-6 sm:px-10 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    Live <FaExternalLinkAlt className="text-sm" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
                  >
                    Code <FaGithub className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
