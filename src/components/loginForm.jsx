import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import AuthContext

const LoginForm = () => {
  const { login } = useContext(AuthContext); // Use context to get login function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const userData = await response.json();
      login(userData); // Call the login function from context
      setUsername(''); // Clear the username field
      setPassword(''); // Clear the password field
      setError(''); // Clear any previous error
    } catch (error) {
      setError(error.message); // Set error message from API response
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button 
        type="submit" 
        className="border border-[#5e208f] text-[#5e208f] px-4 py-2 rounded-lg hover:bg-[#440f69] hover:text-white transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
