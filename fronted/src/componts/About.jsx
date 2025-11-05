import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const About = ({ user, onLogout }) => {
  const userName = user?.name || 'Mark J Yadav';
  const [showMore, setShowMore] = useState(false);

  // Detailed Bio with typing effect
  const detailedBio = `Hi, I'm ${userName}, a dynamic Senior Data Scientist and Full-Stack Developer with 5+ years of experience turning raw data into actionable insights and code into captivating digital experiences. Passionate about the intersection of AI, web tech, and design, I've collaborated on projects that boosted client revenue by 35% through ML-driven recommendations and scaled user bases to 1M+ with robust MEAN/MERN apps.

From my roots in India, where I honed my skills at top tech hubs, to contributing to open-source repos (check @markjyadavoffical on GitHub), I thrive on solving complex problems with elegant, scalable solutions. Whether it's deploying NLP models for sentiment analysis or crafting pixel-perfect UIs in Figma, my mantra is: Innovate, Iterate, Impact. Let's connect to architect the next big thing! 🚀`;

  // Education Timeline Data
  const education = [
    { 
      year: '2020-2022', 
      title: 'M.Tech in Data Science', 
      institution: 'IIT Delhi', 
      desc: 'Specialized in ML, AI, and Big Data. GPA: 9.2/10. Thesis: Predictive Analytics for E-Commerce.',
      iconUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=200&fit=crop'  
    },
    { 
      year: '2016-2020', 
      title: 'B.Tech in Computer Science', 
      institution: 'NIT Trichy', 
      desc: 'Focused on Software Engineering and Algorithms. GPA: 8.8/10. Led hackathon-winning project on IoT.',
      iconUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&h=200&fit=crop'  
    }
  ];

  // Experience Timeline
  const experience = [
    { 
      year: '2023-Present', 
      title: 'Senior Data Scientist', 
      company: 'TechNova AI', 
      desc: 'Led ML teams, developed forecasting models (TensorFlow), integrated with MEAN apps. Impact: 30% efficiency gain.',
      iconUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop'  
    },
    { 
      year: '2021-2023', 
      title: 'Full-Stack Developer', 
      company: 'InnovateLabs', 
      desc: 'Built 10+ web apps using MERN/MEAN, Python backends. Handled AWS deployments and UI/UX design.',
      iconUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop'  
    },
    { 
      year: '2020-2021', 
      title: 'Junior ML Engineer', 
      company: 'DataForge Solutions', 
      desc: 'Created data pipelines with Pandas/Spark, visualized insights via Seaborn. Collaborated on 5 production ML models.',
      iconUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop'  
    }
  ];

  // Certifications
  const certifications = [
    { name: 'Google Data Analytics Professional Certificate', year: '2023', icon: '📊', iconUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=150&h=150&fit=crop' },
    { name: 'AWS Certified Machine Learning - Specialty', year: '2024', icon: '☁️', iconUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop' },
    { name: 'Python for Data Science (Coursera)', year: '2022', icon: '🐍', iconUrl: 'https://images.unsplash.com/photo-1620672617462-61e9d4c3a8e8?w=150&h=150&fit=crop' },
    { name: 'Full-Stack Web Development (Udacity)', year: '2021', icon: '🌐', iconUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&h=150&fit=crop' }
  ];

  // Mini-Projects Showcase with Online Images
  const projects = [
    { 
      title: 'Sentiment Analyzer', 
      desc: 'NLP tool using Python & Hugging Face – analyzes reviews with 92% accuracy. GitHub: markjyadavoffical/sentiment-analyzer', 
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',  
      codeSnippet: 'from transformers import pipeline\nanalyzer = pipeline("sentiment-analysis")\nresult = analyzer("Love this product!")' 
    },
    { 
      title: 'E-Commerce Dashboard', 
      desc: 'MEAN Stack app with real-time analytics and Python ML forecasts. Live Demo: ecodash.markjyadav.com', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',  
      codeSnippet: 'import pandas as pd\ndf = pd.read_csv("sales.csv")\nprint(df.describe())' 
    },
    { 
      title: 'Stock Price Predictor', 
      desc: 'ML model with LSTM in Python – forecasts stocks using historical data. Accuracy: 88%.', 
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop',  
      codeSnippet: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X, y)' 
    },
    { 
      title: 'UI/UX Redesign for App', 
      desc: 'Graphic Design project in Figma – modernized e-learning app interface.', 
      image: 'https://images.unsplash.com/photo-1559028003-3a56d2b8b3e7?w=800&h=600&fit=crop',  
      codeSnippet: '// No code, but Figma link: figma.com/markjyadav/ui-redesign' 
    },
    { 
      title: 'Data Pipeline Automator', 
      desc: 'Python script for ETL – processes 10K+ records daily with Spark.', 
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',  
      codeSnippet: 'import pyspark as ps\nspark = ps.sql.SparkSession.builder.appName("ETL").getOrCreate()' 
    }
  ];

  // Particles for creative background (vibrant rainbow theme)
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 15 + 8,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`  // Full rainbow vibrant
  }));

  return (
    <>
      <style jsx>{`
        @keyframes vibrantShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 0% 100%; }
          75% { background-position: 100% 100%; }
          100% { background-position: 0% 50%; }
        }
        .vibrant-bg {
          background: linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #ffecd2, #fcb69f, #a8edea, #fed6e3, #ff9a9e);
          background-size: 600% 600%;
          animation: vibrantShift 10s ease infinite;  // Faster & more dynamic
          position: relative;
          overflow: hidden;
        }
        .vibrant-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, #ff00ff 45deg, #00ffff 90deg, #ffff00 135deg, #ff0000 180deg, #ff00ff 225deg, #00ff00 270deg, #0000ff 315deg, transparent 360deg);
          opacity: 0.15;  // Slightly brighter for pop
          animation: rotate 12s linear infinite;  // Faster rotation
          z-index: 0;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .super-glow {
          box-shadow: 0 0 30px rgba(255, 0, 255, 0.7), 0 0 60px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 0, 0.3);  // Multi-color neon burst
          transition: box-shadow 0.3s ease;
        }
        .super-glow:hover {
          box-shadow: 0 0 50px rgba(255, 0, 255, 1), 0 0 100px rgba(0, 255, 255, 0.8), inset 0 0 30px rgba(255, 255, 0, 0.5);  // Explosive on hover
        }
      `}</style>
      <div className="min-h-screen relative overflow-hidden vibrant-bg dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        {/* Animated Particles with Super Glow */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full super-glow"
            style={{
              left: `${particle.x}vw`,
              top: `${particle.y}vh`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="max-w-6xl mx-auto p-4 relative z-10"
        >
          {/* Header with Super Glow */}
          <div className="flex justify-between items-center mb-8 pt-4">
            <Link to="/" className="text-white hover:text-yellow-400 font-bold text-xl super-glow">← Back to Home</Link>
            <button onClick={onLogout} className="px-6 py-2 bg-red-600/90 text-white rounded-xl hover:bg-red-700 super-glow transition-all">Logout</button>
          </div>

          {/* Hero Title with Super Glow */}
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-5xl md:text-7xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl super-glow"
          >
            About {userName} 🌟
          </motion.h1>

          {/* Detailed Bio - Typing Effect with Backdrop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3 }}
            className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-cyan-400/40 shadow-2xl super-glow"
          >
            <p className="text-xl text-white/95 mb-6 font-semibold bg-gradient-to-r from-green-400 via-lime-400 to-teal-400 bg-clip-text text-transparent">
              Who I Am: Innovator at Heart
            </p>
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ staggerChildren: 0.03, delay: 0.5 }}
                className="text-lg text-white/90 leading-relaxed"
              >
                {detailedBio.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Education Timeline - 3D Interactive with Images */}
          <motion.section 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-500 bg-clip-text text-transparent super-glow">Education Journey 📚</h2>
            <div className="relative max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ perspective: 1000 }}
                  whileHover={{ rotateY: 10, scale: 1.02 }}
                  className="flex items-center mb-8 p-6 bg-white/15 dark:bg-gray-800/15 rounded-2xl border border-blue-400/30 shadow-xl hover:shadow-2xl super-glow"
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-white/90 mb-1">{edu.institution}</p>
                    <p className="text-white/80">{edu.desc}</p>
                  </div>
                  <motion.img 
                    src={edu.iconUrl} 
                    alt={edu.institution} 
                    className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-blue-400/60 super-glow" 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Timeline - Similar 3D with Images */}
          <motion.section 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 via-lime-400 to-emerald-500 bg-clip-text text-transparent super-glow">Professional Experience 💼</h2>
            <div className="relative max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  style={{ perspective: 1000 }}
                  whileHover={{ rotateY: -10, scale: 1.02 }}
                  className="flex items-center mb-8 p-6 bg-white/15 dark:bg-gray-800/15 rounded-2xl border border-green-400/30 shadow-xl hover:shadow-2xl super-glow"
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-white/90 mb-1">{exp.company}</p>
                    <p className="text-white/80">{exp.desc}</p>
                  </div>
                  <motion.img 
                    src={exp.iconUrl} 
                    alt={exp.company} 
                    className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-green-400/60 super-glow" 
                    whileHover={{ scale: 1.1, rotate: -360 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications Grid - Animated with Images */}
          <motion.section 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent super-glow">Certifications 🏆</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 bg-white/15 dark:bg-gray-800/15 rounded-2xl border border-yellow-400/30 shadow-xl text-center super-glow"
                >
                  <motion.img 
                    src={cert.iconUrl} 
                    alt={cert.name} 
                    className="w-full h-32 object-cover rounded-xl mb-4 super-glow" 
                    whileHover={{ scale: 1.1 }}
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-white/80">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mini-Projects Showcase - With Online Images */}
          <motion.section 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent super-glow">Featured Projects 🚀</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-white/15 dark:bg-gray-800/15 rounded-3xl p-6 border border-pink-400/30 shadow-2xl overflow-hidden super-glow"
                >
                  <motion.img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-48 object-cover rounded-2xl mb-4 hover:brightness-125 transition-all super-glow" 
                    whileHover={{ scale: 1.05 }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-white/90 mb-4">{proj.desc}</p>
                  <SyntaxHighlighter language="python" style={prism} className="rounded-xl text-xs mb-2">
                    {proj.codeSnippet}
                  </SyntaxHighlighter>
                  <a href="#" className="text-cyan-300 hover:text-yellow-300 underline">View on GitHub</a>
                </motion.div>
              ))}
            </div>
            {showMore && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center mt-8 text-white/80"
              >
                More projects on GitHub? Check <a href="https://github.com/markjyadavoffical" className="underline hover:text-yellow-400">here!</a>
              </motion.p>
            )}
            <button 
              onClick={() => setShowMore(!showMore)} 
              className="mx-auto block px-6 py-3 bg-gradient-to-r from-teal-500 via-lime-500 to-cyan-600 text-white font-bold rounded-xl mt-4 hover:shadow-xl super-glow transition-all"
            >
              {showMore ? 'Show Less' : 'Show More Projects'}
            </button>
          </motion.section>

          {/* Fun Facts Stats - Animated Counters */}
          <motion.section 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-500 bg-clip-text text-transparent super-glow">Fun Facts About Me 🎉</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '5+', label: 'Years in Tech', icon: '⚡', iconUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop' },
                { num: '50+', label: 'Projects Built', icon: '🔨', iconUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop' },
                { num: '10K+', label: 'Lines of Code', icon: '💻', iconUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop' },
                { num: '100%', label: 'Passion Level', icon: '❤️', iconUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop' }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/15 dark:bg-gray-800/15 rounded-2xl border border-orange-400/30 text-center shadow-xl super-glow"
                >
                  <motion.img 
                    src={fact.iconUrl} 
                    alt={fact.label} 
                    className="w-16 h-16 mx-auto mb-2 rounded-full object-cover super-glow" 
                    whileHover={{ rotate: 360 }}
                  />
                  <motion.h3 
                    className="text-3xl font-bold text-white"
                    animate={{ textContent: [0, fact.num] }}
                    transition={{ duration: 2 }}
                  >
                    {fact.num}
                  </motion.h3>
                  <p className="text-white/80">{fact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section - Interactive */}
          <motion.section 
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-lime-400 to-cyan-500 bg-clip-text text-transparent super-glow">Let's Connect! 📧</h2>
            <a 
              href="mailto:markjyadaceo@gmail.com?subject=Collaboration%20Idea%20from%20${userName}'s%20Portfolio&body=Hi%20Mark,%0A%0AI%20love%20your%20work%20on%20Data%20Science%20and%20Full-Stack!%0A%0ALet's%20talk%20about...%0A%0ABest,%0A[Your%20Name]"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 super-glow transition-all duration-300 text-xl"
            >
              Send a Message Now!
            </a>
            <p className="text-white/80 mt-4">markjyadaceo@gmail.com | LinkedIn: /in/markjyadav | GitHub: @markjyadavoffical</p>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default About;