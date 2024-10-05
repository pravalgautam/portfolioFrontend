import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import Link from "next/link";
const About = () => {
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
            <div className="">
                About Me
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

export default About