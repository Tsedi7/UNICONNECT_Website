import React, { useState, useEffect } from 'react';
import internshipData from '../internship.json'; // Adjust the path as necessary

const InternshipSection = ({ user, searchTerm }) => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use an object to keep track of watch later state
  const [watchLater, setWatchLater] = useState(() => {
    const savedWatchLater = localStorage.getItem('watchLater');
    return savedWatchLater ? JSON.parse(savedWatchLater) : {};
  });

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setTimeout(() => {
          setInternships(internshipData); // Replace this with your API call if needed
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load internships');
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  // Filter internships based on the search term
  const filteredInternships = internships.filter((internship) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      internship.job_title.toLowerCase().includes(lowerCaseTerm) ||
      internship.employer_name.toLowerCase().includes(lowerCaseTerm) ||
      internship.location.toLowerCase().includes(lowerCaseTerm)
    );
  });

  // Handle "Watch Later" toggle
  const handleWatchLater = (internshipId) => {
    setWatchLater((prevWatchLater) => {
      const isCurrentlyWatched = prevWatchLater[internshipId];
      const updatedWatchLater = {
        ...prevWatchLater,
        [internshipId]: !isCurrentlyWatched, // Toggle the value for the specific internshipId
      };
      localStorage.setItem('watchLater', JSON.stringify(updatedWatchLater)); // Update local storage
      return updatedWatchLater;
    });
  };

  if (loading) {
    return <div className="text-center text-lg text-purple-700">Loading internships...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8 mt-6">Internship Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInternships.map((internship) => (
          <div key={internship.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative group">
            <img src={internship.image} alt={internship.job_title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">{internship.job_title}</h2>
              <p className="text-gray-600 mb-1"><strong>Employer:</strong> {internship.employer_name}</p>
              <p className="text-gray-600 mb-1"><strong>Location:</strong> {internship.location}</p>
              <p className="text-gray-600 mb-1"><strong>Job Type:</strong> {internship.job_type}</p>

              {/* Hover effect to show additional info */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <p className="mb-2 text-lg"><strong>Description:</strong> {internship.description}</p>
                <p className="font-bold mb-1"><strong>Application Date:</strong> {internship.application_date}</p>
                <p className="font-bold mb-4"><strong>Deadline:</strong> {internship.deadline}</p>
                <a 
                  href={internship.apply_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 inline-block py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Watch Later Button positioned below the box */}
            <div className="flex justify-left ml-2 mt-2 mb-4 relative z-20">
              <button 
                onClick={() => handleWatchLater(internship.id)} 
                className={`py-2 px-4 rounded transition ${watchLater[internship.id] ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                {watchLater[internship.id] ? 'Remove from Watch Later' : 'Watch Later'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipSection;
