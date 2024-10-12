import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import the AuthContext
import LoginForm from './loginForm'; // Import your LoginForm component

const NavBar = ({ isSearchOpen, toggleSearch, closeSearch, onSearchChange, searchTerm }) => {
  const { user, logout } = useContext(AuthContext); // Use context to get user state
  const [isLoginFormVisible, setLoginFormVisible] = React.useState(false); // State for showing login form

  const sections = (
    <div className="flex space-x-8">
      <Link to="/about" className="text-[#5e208f] hover:underline">About Us</Link>
      <Link to="/scholarships" className="text-[#5e208f] hover:underline">Scholarships</Link>
      <Link to="/internship" className="text-[#5e208f] hover:underline">Internships</Link>
      <Link to="/blogs" className="text-[#5e208f] hover:underline">Blogs</Link>
      <Link to="/researches" className="text-[#5e208f] hover:underline">Researches</Link>
      <Link to="/news" className="text-[#5e208f] hover:underline">News</Link>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 transition duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-[#5e208f]">UniConnect</Link>

        {/* Centered Sections */}
        <div className="flex-grow flex justify-center space-x-4">
          {user ? sections : null}
        </div>

        {/* Search Bar and Icon */}
        <div className="flex items-center space-x-4 relative">
          <button onClick={toggleSearch} className="text-gray-700 focus:outline-none hover:text-[#5e208f] transition duration-300">
            <FiSearch className="text-2xl" />
          </button>

          {isSearchOpen && (
            <div className="absolute top-10 right-0 w-[400px] bg-white border border-gray-300 rounded-lg p-2 shadow-lg transition transform duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={onSearchChange}
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-[#5e208f] text-black transition duration-300"
                />
                <button onClick={closeSearch} className="ml-2 text-gray-700 hover:text-[#5e208f] focus:outline-none transition duration-300">
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>
            </div>
          )}

          {/* Login/Logout Section */}
          {!user ? (
            <>
              <button 
                onClick={() => setLoginFormVisible(true)} 
                className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300"
              >
                Login
              </button>

              {isLoginFormVisible && (
                <div className="absolute top-16 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-50">
                  <LoginForm onLoginSuccess={() => setLoginFormVisible(false)} />
                </div>
              )}
            </>
          ) : (
            <>
              <span className="text-[#5e208f]">Welcome, {user.username}!</span>
              <button 
                onClick={logout} 
                className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
