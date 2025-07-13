// src/components/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));

  // Clear error when user types
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }));
  }
};


  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits)';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const { name, email, phone, message } = formData;

 const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    setIsSubmitting(true);

    const { data } = await axios.post('https://myportfolio-backend-peox.onrender.com/api/email', {
      name,
      email,
      phone,
      message,
    });

    if (data.success) {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setErrors({});
      setIsSubmitted(true); 

      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } else {
      toast.error(data.message || "Something went wrong!");
    }
  } catch (error) {
    console.error("Submission error:", error);
    toast.error(error.response?.data?.message || error.message || "Server error");
  } finally {
    setIsSubmitting(false);
  }
};


  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: 'backOut' 
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-5, 5],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="contact-section"
    >
      {/* DeepSeek-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          variants={floatingVariants}
          animate="float"
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          variants={floatingVariants}
          animate="float"
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"
          variants={floatingVariants}
          animate="float"
        ></motion.div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-4xl mt-8 md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have a project in mind or want to discuss opportunities? Fill out the form below and I'll get back to you as soon as possible.
          </motion.p>
        </div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isSubmitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for reaching out. I'll get back to you soon.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg font-medium hover:from-cyan-700 hover:to-blue-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-300 mb-2  items-center">
                  <FaUser className="mr-2 text-cyan-400" /> Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 backdrop-blur-sm border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-300 mb-2  items-center">
                  <FaEnvelope className="mr-2 text-cyan-400" /> Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 backdrop-blur-sm border ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="phone" className="block text-gray-300 mb-2  items-center">
                  <FaPhone className="mr-2 text-cyan-400" /> Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 backdrop-blur-sm border ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="1234567890"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaPhone />
                  </div>
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </motion.div>

              <motion.div className="mb-8" variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-gray-700/50 backdrop-blur-sm border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                  placeholder="I'd like to discuss a project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className={`w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg font-medium flex items-center justify-center ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:from-cyan-700 hover:to-blue-800'
                  } transition-all`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 sm:mx-6 md:mx-20 lg:mx-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div  className="bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 hover:text-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a href='mailto:adityaborhade793@gmail.com' className="text-gray-300 hover:underline">
                adityaborhade793@gmail.com
             </a>

           
          </div>
          
          <div  className="bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 hover:text-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <FaPhone className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">phone</h3>
            <p className="text-gray-300">+91 9325964430</p>
          </div>
          
         
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;