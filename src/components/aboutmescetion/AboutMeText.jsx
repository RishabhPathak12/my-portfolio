import React from 'react'

export const AboutMeText = () => {
  return (
    <div className="w-full max-w-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 text-center md:text-left mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">About Me</h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
        Hi, I'm <span className="text-cyan-400 font-semibold">Rishabh Kumar</span>, 
        a passionate <span className="text-cyan-400 font-semibold">Full-Stack Web Developer</span> 
        with over 1 year of experience in creating <b>interactive & user-friendly websites</b>.
      </p>

      <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
        I specialize in <b>HTML, CSS, JavaScript, PHP with Laravel, MYSQL, React, and Tailwind CSS</b> to build modern and 
        <b> responsive web applications</b>. I love solving problems and turning ideas into beautiful digital experiences.  
      </p>

      <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
        My goal is to keep learning and mastering <b>cutting-edge web technologies</b> to build 
        scalable and high-performance web applications. Let's <b>connect & create something amazing together!</b>
      </p>

      {/* Connect Button */}
      <a href="https://drive.google.com/uc?export=download&id=1lIN_SX2TeA3nfLJd2GGs3JrPfSisY5al" 
        className="mt-6 inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition">
          Download CV
      </a>
    </div>
  )
}
