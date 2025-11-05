import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SkillsPython = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const userName = user?.name || 'Tera Naam';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-green-600 hover:text-green-800 font-semibold">← Back to Portfolio</Link>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
        </div>

        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Python Mastery
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Versatile scripting for automation, data processing, and backend APIs.
        </motion.p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {['Django', 'Flask', 'Pandas', 'NumPy', 'Scripts'].map((tool, i) => (
            <motion.li key={tool} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg text-center font-semibold">
              {tool}
            </motion.li>
          ))}
        </ul>

        <motion.p transition={{ delay: 0.4 }} className="text-center text-gray-600 dark:text-gray-400">
          Sample: Automation bots for daily tasks. 🐍
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SkillsPython;