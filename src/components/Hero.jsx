// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Experience the Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> 3D Design</span>
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Transform your digital experiences with cutting-edge 3D technology. Our platform leverages 
              Spline's powerful 3D engine to create immersive, interactive designs that captivate your 
              audience and elevate your brand presence across all devices.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105">
                Start Creating
              </button>
              <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>

        {/* 3D Spline Component */}
        <div className="relative">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800/50 flex items-center justify-center">
              {/* Spline 3D Viewer */}
              <spline-viewer 
                url="https://prod.spline.design/gxEMTZkaX-yfU6UX/scene.splinecode"
                loading="lazy"
                className="w-full h-full"
              >
                {/* Fallback content */}
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p>Loading 3D Experience...</p>
                </div>
              </spline-viewer>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-sm text-slate-400">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">4K+</div>
                <div className="text-sm text-slate-400">Assets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">60FPS</div>
                <div className="text-sm text-slate-400">Smooth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;