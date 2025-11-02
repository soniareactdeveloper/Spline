// App.jsx
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-lg sm:text-xl font-bold">Spline</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* CTA Button */}
            <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium transition duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 border-t border-gray-800 px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-white transition duration-300">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white transition duration-300">Projects</a>
            <a href="#" className="block text-gray-300 hover:text-white transition duration-300">About</a>
            <a href="#" className="block text-gray-300 hover:text-white transition duration-300">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-1 gap-6 px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:px-6 text-center lg:text-left order-1 lg:order-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Immerse in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              3D Experience
            </span>
          </h1>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-5">
              Discover the future of interactive design with cutting-edge 3D technology. 
              Our platform brings your ideas to life with stunning visual experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Explore Now
              </button>
              <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Spline 3D Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-none">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
            <Spline
              scene="https://prod.spline.design/4ln9paP9D2BGzqPk/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
