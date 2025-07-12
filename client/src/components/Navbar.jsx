import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Skills', to: '/skills' },
    { name: 'Contact', to: '/Contact' },
  ];

  const socialIcons = [
    { icon: <FiGithub />, url: 'https://github.com/adityaborhade18' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/adityaborhade-9489712a4/' },
    { icon: <FiTwitter />, url: 'https://x.com/1828Aditya' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Animated Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            &lt;Portfolio/&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative px-2 py-1 font-medium transition-all duration-300 ${
                    location.pathname === item.to
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.to && (
                    <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-indigo-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 border-l border-gray-700 pl-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-2xl font-medium px-4 py-2 transition-all duration-300 ${
                  location.pathname === item.to
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex space-x-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-2xl p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;