import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import InternshipSection from '../components/InternshipSection';

const InternshipPage = ({ user, onLogoutClick, onLoginClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setSearchTerm(''); // Clear search term when closing
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm(''); // Clear search term when closing
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NavBar
        isSearchOpen={isSearchOpen}
        toggleSearch={toggleSearch}
        closeSearch={closeSearch}
        onSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <InternshipSection user={user} searchTerm={searchTerm} />
    </div>
  );
};

export default InternshipPage;
