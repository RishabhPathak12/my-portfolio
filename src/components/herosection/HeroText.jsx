import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../frameMotion/variants';

export const HeroText = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-6 h-full px-4 sm:px-6 md:px-8 w-full max-w-[90%] lg:max-w-[600px] mx-auto'>

      {/* Social Media (Left Side) */}
      <div className="flex md:flex-col gap-4 md:gap-6 text-cyan-500 text-2xl md:text-3xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
          <FaInstagram />
        </a>
      </div>

      {/* Hero Text (Right Side) */}
      <div className='flex flex-col gap-4 text-center md:text-left w-full'>
        {/* Role */}
        <motion.h2 variants={fadeIn('down', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className='text-sm sm:text-lg md:text-xl lg:text-2xl uppercase text-cyan-500 tracking-wide'>
          Full-Stack Web Developer
        </motion.h2>

        {/* Name */}
        <motion.h1 variants={fadeIn('right', '0.4')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-special text-orange-500 leading-tight'>
          Rishabh Kumar
        </motion.h1>

        {/* Description */}
        <motion.p variants={fadeIn('up', '0.6')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className='text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 text-white leading-relaxed'>
          A Passionate Web Developer
          <br />
          with 1 year of experience
        </motion.p>
      </div>

    </div>
  );
};
