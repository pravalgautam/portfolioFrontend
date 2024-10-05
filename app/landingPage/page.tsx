'use client';
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import Link from "next/link";

const LandingPage = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/portfolio');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Render loading state
    if (loading) {
        return <div className="min-h-screen w-screen bg-black flex items-center justify-center text-white">Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div className="min-h-screen w-screen bg-black flex items-center justify-center text-white">Error: {error.message}</div>;
    }

    if (!profileData) {
        return null; // If profileData is null, return null or a fallback UI
    }

    return (
        <div className="min-h-screen w-screen bg-black"> 
          {/* Main Content */}
          <div className="flex items-center justify-center py-2 px-2 sm:py-28 sm:px-32 md:py-[6rem] md:px-[15rem]">
    
            <div className="bg-white w-full h-full rounded-xl shadow-md overflow-hidden transform translate-y-full animate-slideUp ">
              
              {/* Navigation Bar */}
              <div className="Nav flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex space-x-4">
                  <Link href="/" passHref>
                    <button className="text-gray-600 hover:text-black">Home</button>
                  </Link>
                  <Link href="/about" passHref> 
                    <button className="text-gray-600 hover:text-black">About</button>
                  </Link>
                  <Link href="/contact" passHref>
                    <button className="text-gray-600 hover:text-black">Contact</button>
                  </Link>
                </div>
              </div>
    
              {/* Main Content */}
              <div className="flex flex-col md:flex-row h-full w-full transform translate-y-full animate-slideUp">
                
                {/* Left Section - Text Content */}
                <div className="flex flex-col items-start justify-center h-full px-6 pb-8 md:px-16 md:pb-24 w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl md:pt-[12rem] pt-12 font-bold text-gray-800">{profileData.title}</h2>
                  <p className="mt-2 text-gray-600 w-full max-w-lg">
                    {profileData.description}
                  </p>
                  
                  <button className="w-[150px] bg-black h-[45px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white">
                    Projects
                  </button>
    
                  {/* Social Media Icons */}
                  <div className="flex space-x-8 pt-4">
    {profileData.socialMedia.map((social, index) => (
        <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-black hover:text-gray-800" // Set text color to black and change on hover
        >
            {social.platform === 'LinkedIn' && <FaLinkedin className="text-black" />}  {/* Icon color set to black */}
            {social.platform === 'GitHub' && <FaGithub className="text-black" />}      {/* Icon color set to black */}
            {social.platform === 'Twitter' && <FaTwitter className="text-black" />}    {/* Icon color set to black */}
        </a>
    ))}
</div>

                </div>
    
                {/* Right Section - iPhone Mockup */}
                <div className="flex items-center justify-center w-full md:w-1/2 relative pb-8 md:pb-16 md:pt-24">
                  <div className="Mobile h-[30rem] w-[14rem] bg-white rounded-[3rem] shadow-lg relative overflow-hidden border-4 border-gray-600 p-4">
                    {/* Top black bar to simulate iPhone notch */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-[1.2rem] w-[4.5rem] bg-black rounded-full"></div>
    
                    {/* Experience Section */}
                    <h1 className='text-black pt-6 font-serif text-xl font-semibold text-center'>Experience</h1>
                    <div className="flex flex-col items-center space-y-6 pt-8">
                      {profileData.experience.map((exp, index) => (
                        <div className="flex items-center" key={index}>
                          <div className="w-1 h-20 bg-red-900"></div>
                          <p className='text-gray-600 px-4 font-serif text-sm'>{`${exp.title} at ${exp.company} - ${exp.duration}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <div className="bg-gray-300 h-5 flex items-center justify-center md:opacity-0">
            <p className="text-gray-500 text-sm">© 2024 Praval. All rights reserved.</p>
          </div>
        </div>
      );
}

export default LandingPage;
