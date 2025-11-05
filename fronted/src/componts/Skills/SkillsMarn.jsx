import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SkillsMERN = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const userName = user?.name || 'Tera Naam';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
        {/* Header with Back & Logout */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">← Back to Portfolio</Link>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
        </div>

        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          MERN Stack Expertise
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Building scalable web apps with MongoDB, Express.js, React, and Node.js. From full-stack projects to real-time features.
        </motion.p>

        {/* Tools List */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tool, i) => (
            <motion.li key={tool} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg text-center font-semibold">
              {tool}
            </motion.li>
          ))}
        </ul>

        <motion.p transition={{ delay: 0.4 }} className="text-center text-gray-600 dark:text-gray-400">
          Sample Project: This portfolio itself! 🚀
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SkillsMERN;