import React from 'react';
import stackImage from '../assets/about/suman-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const CppIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#00599C" d="M120.3 33.6l-50.6-29.3c-3.6-2.1-7.9-2.1-11.4 0L7.7 33.6C4.1 35.7 2 39.5 2 43.6v58.6c0 4.1 2.2 7.9 5.7 10l50.6 29.3c3.6 2.1 7.9 2.1 11.4 0l50.6-29.3c3.6-2.1 5.7-5.9 5.7-10V43.6c0-4.1-2.2-7.9-5.7-10z"/>
      <path fill="#FFF" d="M57.6 86.8c-12.7 0-21.7-9.5-21.7-22.8 0-13.3 9-22.8 21.7-22.8 7.3 0 13.5 3.3 17.5 9l-7.7 5.7c-2.4-3.4-5.8-5.3-9.8-5.3-7.5 0-12.2 6.1-12.2 13.4 0 7.3 4.7 13.4 12.2 13.4 4 0 7.4-1.9 9.8-5.3l7.7 5.7c-4 5.7-10.2 9-17.5 9zM92.6 71.9h-5.4v5.4h-3.8v-5.4h-5.4v-3.8h5.4v-5.4h3.8v5.4h5.4v3.8zM113.1 71.9h-5.4v5.4h-3.8v-5.4h-5.4v-3.8h5.4v-5.4h3.8v5.4h5.4v3.8z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">C++</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M64 12.2c-25.5 0-24.1 11.1-24.1 11.1l-.1 11.4h24.8v3.5H35.8s-17.1-1.6-17.1 16.5c0 18.1 14.8 17.4 14.8 17.4h6.8V60.7c0-11 9.4-19.8 20.3-19.8h21.1V28.3s1.5-16.1-17.7-16.1zm-12.5 7.6c1.9 0 3.5 1.6 3.5 3.5 0 1.9-1.6 3.5-3.5 3.5-1.9 0-3.5-1.6-3.5-3.5 0-1.9 1.6-3.5 3.5-3.5z"/>
      <path fill="#FFD43B" d="M64.6 115.8c25.5 0 24.1-11.1 24.1-11.1l.1-11.4H64.1V89.8h28.8s17.1 1.6 17.1-16.5c0-18.1-14.8-17.4-14.8-17.4H88.4v11.4c0 11-9.4 19.8-20.3 19.8H47v12.6s-1.5 16.1 17.6 16.1zM77 108.2c-1.9 0-3.5-1.6-3.5-3.5 0-1.9 1.6-3.5 3.5-3.5 1.9 0 3.5 1.6 3.5 3.5 0 1.9-1.6 3.5-3.5 3.5z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const DatabaseIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none" stroke="#fff" strokeWidth="6">
      <ellipse cx="64" cy="32" rx="40" ry="16" />
      <path d="M24 32v64c0 8.8 17.9 16 40 16s40-7.2 40-16V32" />
      <path d="M24 64c0 8.8 17.9 16 40 16s40-7.2 40-16" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Vector DB</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Suman Kumar — AI-Native Software Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CppIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DatabaseIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
