import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = ({ user, onLogout }) => {
  const userName = user?.name || 'Muskan Yadav';  // Apna name yahaan daal de, e.g., 'Mark J. Yadav'
  const userBio = user?.bio || `Hi, I'm ${userName}, a passionate Full-Stack Software Developer with over 3 years of hands-on experience in building innovative and scalable digital solutions. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), creating dynamic web applications that enhance user experiences and drive business efficiency.

My skill set extends beyond frontend and backend development: I leverage Python for automation, scripting, and robust backend APIs; harness Data Science and Machine Learning (using tools like Scikit-learn, TensorFlow, and Pandas) to extract actionable insights from complex datasets; and apply Graphic Design principles (with Adobe Suite and Figma) to craft visually stunning UI/UX designs that blend creativity with functionality.

Based in India, I thrive on solving real-world challenges through clean, efficient code and collaborative projects. Whether it's developing a full-stack e-commerce platform or analyzing data for predictive models, I'm always eager to innovate and deliver results that exceed expectations. Let's connect to bring your ideas to life!`; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="max-w-4xl mx-auto"
      >
        {/* Header with Back & Logout */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">← Back to Portfolio</Link>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Logout</button>
        </div>

        {/* About Title */}
        <motion.h1 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          About {userName}
        </motion.h1>

        {/* Bio Section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 dark:border-gray-700/50 shadow-lg"
        >
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 prose prose-lg max-w-none">
            <p>{userBio.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>  {/* Line breaks for readability */}
          </div>
          
          {/* Skills Summary List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Core Skills:</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• MERN Stack (Full-Stack Web Development)</li>
                <li>• Python (Automation & Backend)</li>
                <li>• Data Science & Machine Learning</li>
                <li>• Graphic Design (UI/UX & Visuals)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Tech:</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• React, Node.js, MongoDB</li>
                <li>• Django/Flask, Pandas, TensorFlow</li>
                <li>• Adobe Photoshop, Figma</li>
                <li>• Git, AWS, Jupyter</li>
              </ul>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <a 
              href="mailto:markjyadaceo@gmail.com?subject=Let's%20Collaborate%20on%20a%20Project&body=Hi%20${userName},%0A%0AI'd%20love%20to%20discuss...%0A%0ABest," 
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message 📧
            </a>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">3+</h3>
            <p className="text-gray-600 dark:text-gray-300">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">20+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Delivered</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">India</h3>
            <p className="text-gray-600 dark:text-gray-300">Location</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;