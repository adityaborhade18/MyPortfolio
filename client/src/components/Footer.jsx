import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Aditya Borhade</h1>
          <p className="text-sm text-gray-400">
            Full-Stack Developer | Building the web, one project at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/Contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/adityaborhade18" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/adityaborhade18/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="https://x.com/1828Aditya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aditya Borhade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

