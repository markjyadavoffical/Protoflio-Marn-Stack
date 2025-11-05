import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './componts/Rister';
import Login from './componts/Login';
import Home from './componts/Home'; 

// Skill Pages
import SkillsMERN from './componts/Skills/SkillsMarn';
import SkillsPython from './componts/Skills/SkillPaython';
import SkillsDataScience from './componts/Skills/SkillDataScince';
import SkillsGraphicDesign from './componts/Skills/SkillGraphicDisner';

// About Page
import About from './componts/About';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  const handleLogin = (newToken, userData) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register onLogin={handleLogin} />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Home onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          
          {/* Skill Pages */}
          <Route path="/skills/mern" element={<ProtectedRoute><SkillsMERN onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          <Route path="/skills/python" element={<ProtectedRoute><SkillsPython onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          <Route path="/skills/data-science" element={<ProtectedRoute><SkillsDataScience onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          <Route path="/skills/graphic-design" element={<ProtectedRoute><SkillsGraphicDesign onLogout={handleLogout} user={user} /></ProtectedRoute>} />
          
          <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;