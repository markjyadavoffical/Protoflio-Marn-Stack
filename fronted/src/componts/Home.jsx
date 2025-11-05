import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // AnimatePresence for better transitions
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';  
const Home = ({ onLogout, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
    setIsLoading(false);
  }, [navigate]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const handleLogout = async () => {
    try {
      await axios.post('api/users/logout', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    } catch (err) {
      console.log('Logout error:', err);
    }
    localStorage.removeItem('token');
    onLogout();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-700 animate-pulse">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <svg className="animate-spin h-12 w-12 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-white font-semibold">Igniting Creativity...</p>
        </motion.div>
      </div>
    );
  }

  const userName = user?.name || 'Muskan Yadav';

 
  const bioText = `Mark J Yadav: Igniting Innovation Through Code & Data 🌟
As a Senior Data Scientist and Full-Stack Developer with 5+ years of battle-tested experience, I craft transformative solutions that blend cutting-edge tech with real-world impact. From architecting ML models in Python that predict market trends with 95% accuracy to deploying scalable MEAN Stack apps on AWS that serve millions—I've turned complex challenges into seamless successes.

My toolkit? Python wizardry with TensorFlow, Scikit-learn, and Pandas for NLP, CV, and predictive analytics; MEAN Stack mastery for dynamic, responsive web ecosystems; plus a flair for Data Viz (Seaborn, Tableau) and Agile workflows. Open-source enthusiast (@markjyadavoffical on GitHub), certified in Google Data Analytics & AWS ML—I'm all about collaborative sparks that fuel growth. Ready to code the future? Let's connect and create magic! 🚀`;

  // Particles for background creativity
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Animated Particles Background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30 dark:opacity-20"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Header with Dark Mode Toggle */}
      <header className="fixed top-4 right-4 z-50">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 180 }} 
          onClick={toggleDarkMode} 
          className="p-3 bg-white/20 dark:bg-gray-800/40 rounded-full shadow-xl backdrop-blur-md border border-white/30 dark:border-gray-700/30"
        >
          {isDarkMode ? <SunIcon className="h-6 w-6 text-yellow-300 drop-shadow-lg" /> : <MoonIcon className="h-6 w-6 text-gray-200 drop-shadow-lg" />}
        </motion.button>
      </header>

      {/* Hero Section - Vibrant & Creative */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          {}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            style={{ perspective: 1000 }}
            className="mb-8"
          >
            <motion.img
              src="./imag/my.jpg" 
              alt={`${userName}'s Profile`}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15, 
                rotateX: -10,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/50 dark:border-purple-400/50 cursor-pointer filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Name - Glow Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "drop-shadow(0 0 0px #fff)" }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))" 
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 dark:from-gray-200 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent mb-4"
          >
            {userName}
          </motion.h1>

          {/* Bio - Staggered Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-white/90 dark:text-gray-200 mb-6 font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Senior Data Scientist & Full-Stack Developer
            </p>
            <AnimatePresence>
              <motion.p 
                className="text-lg text-white/80 dark:text-gray-300 leading-relaxed px-4 py-4 bg-black/20 dark:bg-white/10 rounded-2xl backdrop-blur-md border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.05, delay: 1.2 }}
              >
                {bioText.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Nav Links - Colorful Buttons */}
          <div className="space-x-4 mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
            >
              About Me ✨
            </Link>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-orange-400 hover:to-red-500 transform hover:scale-105 transition-all duration-300"
            >
              Logout 🚪
            </motion.button>
          </div>
        </div>
      </section>

      {/* Skills Section - Colorful & Progress Bars */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-white/80 dark:to-gray-900/80">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Skill Arsenal 🎯
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'MEAN Stack', icon: '🚀', desc: 'MongoDB, Express, Angular, Node.js', path: '/skills/mern', color: 'from-blue-500 to-indigo-600', progress: 95 },
              { title: 'Python', icon: '🐍', desc: 'Automation, ML & Data Pipelines', path: '/skills/python', color: 'from-green-500 to-emerald-600', progress: 90 },
              { title: 'Data Science & ML', icon: '📊', desc: 'TensorFlow, Scikit-learn, Insights', path: '/skills/data-science', color: 'from-purple-500 to-violet-600', progress: 92 },
              { title: 'Graphic Design', icon: '🎨', desc: 'Figma, Adobe Suite, UI/UX Magic', path: '/skills/graphic-design', color: 'from-pink-500 to-rose-600', progress: 85 }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ perspective: 1000 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 20, 
                  rotateX: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                className={`backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center cursor-pointer overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-2xl mb-4 mx-auto w-16 h-16 flex items-center justify-center`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <Link to={skill.path} className="block h-full">
                  <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-white/80 mb-4">{skill.desc}</p>
                  {/* Creative Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <motion.div 
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-white/70 text-sm">{skill.progress}% Mastery</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Vibrant Contact */}
      <footer className="py-12 text-center relative z-10 bg-gradient-to-t from-black/50 to-transparent">
        <p className="text-xl text-white/90 mb-4 font-semibold">Let's Create Something Epic Together! 🌌</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:markjyadaceo@gmail.com" className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <EnvelopeIcon className="h-6 w-6 text-white" />
          </a>
          <a href="https://github.com/markjyadavoffical" className="p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </a>
        </div>
        <p className="text-white/70">&copy; 2025 {userName}'s Cosmos. Built with ❤️ & MERN Magic.</p>
      </footer>
    </div>
  );
};

export default Home;