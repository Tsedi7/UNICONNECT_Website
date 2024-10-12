// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoginForm from './components/loginForm'; // Make sure this is the correct case for your file name
import AboutPage from './components/about'; // Make sure this is the correct case for your file name
import InternshipPage from './components/internship'; // Make sure this is the correct case for your file name

const App = () => {
  const [user, setUser] = useState(null); // To store logged-in user
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); // To manage login form visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // To manage search bar visibility
  const [searchTerm, setSearchTerm] = useState(''); // To manage search input

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Update user state on successful login
    setIsLoginFormOpen(false); // Close the login form
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev); // Toggle search bar visibility
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };

  return (
    <Router>
      <NavBar 
        user={user} 
        onLoginClick={() => setIsLoginFormOpen(true)} 
        onLogoutClick={handleLogout} 
        isSearchOpen={isSearchOpen} 
        toggleSearch={toggleSearch} 
        onSearchChange={handleSearchChange} 
        searchTerm={searchTerm} // Pass search term
      />
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/key-features" element={<KeyFeatures />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/internship" element={<InternshipPage />} />
      </Routes>
      
      <Footer />
      
      {isLoginFormOpen && (
        <div 
          role="dialog" 
          aria-labelledby="login-modal-title" 
          aria-modal="true" 
          className="fixed inset-0 flex items-start justify-center z-20" 
          style={{ top: '70px' }}
        >
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
      
      {user && <p className="text-center mt-4">Welcome, {user.username}!</p>}
    </Router>
  );
};

export default App;
