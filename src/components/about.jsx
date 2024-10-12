import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUsers, FaBook, FaBriefcase, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import RegistrationForm from './RegistrationForm'; // Make sure this component is correctly imported

const AboutPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const handleFormClose = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* About Section */}
      <div className="pt-24 px-8 lg:px-20">
        {/* Who Are We Section */}
        <div className="mb-16 p-10 bg-[#f0f4f8] rounded-lg shadow-lg relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url("https://media.gettyimages.com/id/1200699832/vector/user-experience-related-vector-illustration-flat-modern-design.jpg?s=612x612&w=0&k=20&c=ynymjfFKxiFhZS4HcyP-AuyBzQHimeKNWdSrLz7R8eU=")' }}
          ></div>

          <h2 className="text-5xl font-bold text-[#590D82] mb-6 text-center relative font-serif z-10">
            <span className="relative z-10">Who We Are ?</span>
            <div className="absolute inset-0 w-full h-1 bg-[#d1c4e9] mt-2 rounded-full"></div>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center mb-10 relative z-10">
            <div className="w-full max-w-4xl mb-6 mx-auto">
              <p className="text-lg font-bold text-gray-700 text-center md:text-left mb-4 font-sans">
                Who is UniConnect? 
                UniConnect is a pioneering platform designed to foster meaningful connections between students and industry professionals, creating a dynamic ecosystem that promotes collaboration and growth. 🌱 Our mission is to empower students by providing them with the tools, resources, and networking opportunities necessary to thrive in their academic and professional journeys. 🚀 At UniConnect, we recognize the challenges faced by students as they transition from the classroom to the workforce, and we aim to bridge this gap through targeted mentorship programs, career development workshops, and access to exclusive internship and job opportunities. 🔗 By facilitating partnerships between academia and industry, we ensure that students not only gain practical experience but also develop essential skills and insights from seasoned professionals. 💼 Our community is built on the values of diversity, inclusion, and innovation, where every member can share their knowledge, contribute to collaborative projects, and participate in engaging discussions that spark creativity and inspire success. 💡 In essence, UniConnect is more than just a platform; it is a supportive network that nurtures talent, encourages personal and professional development, and cultivates a culture of lifelong learning. 📚
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative bg-gradient-to-r from-[#590D82] to-[#e9caff] p-12 rounded-lg shadow-lg flex items-center justify-between flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-6">
            <motion.img
              src="https://img.freepik.com/premium-vector/cartoon-target-white-background-vector-illustration_646737-3555.jpg?w=740"
              alt="Mission"
              className="w-80 h-auto rounded-full shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="lg:w-1/2 p-6 text-white text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At UniConnect, we aim to create meaningful connections between students, faculty, and industry partners by fostering collaboration, innovation, and ensuring academic ideas turn into reality.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative bg-[#ffffff] transform -skew-y-3 p-12 rounded-lg shadow-lg">
          <div className="transform skew-y-3">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="lg:w-1/2 p-6">
                <motion.img
                  src="https://img.freepik.com/free-photo/man-with-his-racket_1048-1626.jpg?ga=GA1.1.852196579.1727083503&semt=ais_hybrid-rr-similar"
                  alt="Vision"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="lg:w-1/2 p-6 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-[#590D82] mb-4">Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where academic institutions and industries work hand in hand to cultivate talent, foster innovation, and create solutions that benefit society. UniConnect aims to be at the forefront of this transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How Students Use Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#590D82] mb-8 mt-6 text-center relative">
            <span className="relative z-10">How Students Use UniConnect ?</span>
            <div className="absolute inset-0 w-full h-1 bg-[#f5f5f5] mt-2"></div>
          </h2>

          <div className="flex flex-col items-center space-y-8">
            {/* First Box (Left) */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#f5f5f5] transition-all duration-300 flex flex-col items-start w-3/4 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <FaSearch className="text-[#590D82] text-5xl mb-4 transition-transform duration-300 hover:rotate-12" />
              <h3 className="text-2xl font-semibold mb-4">Search Internships</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Browse available internships by category.</li>
                <li>Apply directly through the platform.</li>
                <li>Receive notifications about new opportunities.</li>
              </ul>
            </motion.div>

            {/* Second Box (Right) */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#f5f5f5] transition-all duration-300 flex flex-col items-start w-3/4 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <FaUsers className="text-[#590D82] text-5xl mb-4 transition-transform duration-300 hover:rotate-12" />
              <h3 className="text-2xl font-semibold mb-4">Connect with Peers</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Network with students across various universities.</li>
                <li>Collaborate on academic and extracurricular projects.</li>
                <li>Join groups and forums for shared interests.</li>
              </ul>
            </motion.div>

            {/* Third Box (Left) */}
            <motion.div
              className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#f5f5f5] transition-all duration-300 flex flex-col items-start w-3/4 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <FaBook className="text-[#590D82] text-5xl mb-4 transition-transform duration-300 hover:rotate-12" />
              <h3 className="text-2xl font-semibold mb-4">Access Resources</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Find scholarships tailored to your needs.</li>
                <li>Access research materials and academic articles.</li>
                <li>Get career guidance from industry professionals.</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="mb-16">
  <h2 className="text-4xl font-bold text-[#590D82] mb-8 text-center relative">
    <span className="relative z-10">How Professionals Use UniConnect ?</span>
    <div className="absolute inset-0 w-full h-1 bg-[#f5f5f5] mt-2"></div>
  </h2>

  <div className="flex flex-col md:flex-row md:justify-center space-y-6 md:space-y-0 md:space-x-6">
    {/* First Box */}
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2 w-4/5 md:w-1/3"
      whileHover={{ scale: 1.05 }}
    >
      <FaBriefcase className="text-[#590D82] text-5xl mb-4 bg-[#d1c4e9] p-4 rounded-full inline-block" />
      <h3 className="text-2xl font-semibold mb-2">Post Opportunities</h3>
      <p className="text-gray-700">
        Professionals can post job opportunities and internships for students.
      </p>
    </motion.div>

    {/* Second Box */}
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2 w-4/5 md:w-1/3"
      whileHover={{ scale: 1.05 }}
    >
      <FaChalkboardTeacher className="text-[#590D82] text-5xl mb-4 bg-[#b2ebf2] p-4 rounded-full inline-block" />
      <h3 className="text-2xl font-semibold mb-2">Mentorship</h3>
      <p className="text-gray-700">
        Industry professionals can mentor students and guide them in their career paths.
      </p>
    </motion.div>

    {/* Third Box */}
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2 w-4/5 md:w-1/3"
      whileHover={{ scale: 1.05 }}
    >
      <FaHandshake className="text-[#590D82] text-5xl mb-4 bg-[#ffccbc] p-4 rounded-full inline-block" />
      <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
      <p className="text-gray-700">
        Professionals can collaborate on research projects and other initiatives.
      </p>
    </motion.div>
  </div>
</div>

<div className="mb-16 p-6 bg-white rounded-lg shadow-lg">
  <h3 className="text-2xl font-semibold text-[#590D82] mb-4 text-center">Join Us Today!</h3>
  <p className="text-lg text-gray-700 mb-6 text-center">
    Whether you're a student seeking internships or a professional looking to give back, UniConnect is here to help you succeed. Join us today and start making meaningful connections!
  </p>
        {/* Get Started Section */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsFormOpen(true)} // Open the registration form
            className="bg-[#590D82] text-white py-3 px-6 rounded-lg text-lg transition duration-200 hover:bg-[#3d005e] focus:outline-none focus:ring-2 focus:ring-[#3d005e] focus:ring-opacity-50"
          >
            Get Started
          </button>
        </div>
      </div>
      </div>

      {/* Registration Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold text-center mb-4">Register Now</h2>
            <RegistrationForm onClose={handleFormClose} /> {/* Pass close handler */}
            <button
              onClick={handleFormClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
