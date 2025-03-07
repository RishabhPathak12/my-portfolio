import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'

export const HeroPic = () => {
  return (
    <motion.div variants={fadeIn('left', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className='relative flex items-center justify-center h-full p-4 overflow-hidden'>
      {/* Hexagon Background Shape (No Scroll Issue) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <PiHexagonThin
          className='lg:h-[500px] md:h-[400px] sm:h-[300px] h-[250px] w-auto text-cyan-500 opacity-30 blur-lg -z-10 animate-[spin_20s_linear_infinite]'
        />
      </div>

      {/* Shadow Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-500">
        <div className="lg:h-[450px] md:h-[350px] sm:h-[250px] h-[200px] lg:w-[450px] md:w-[350px] sm:w-[250px] w-[200px] bg-cyan-500 blur-3xl opacity-40 -z-10 animate-pulse rounded-full hover:blur-[60px] hover:opacity-70"></div>
      </div>

      {/* Image (Rounded + Hover Effects) */}
      <img
        src="Rishabh.png"
        alt="Rishabh Kumar"
        className="relative lg:max-h-[450px] md:max-h-[350px] sm:max-h-[250px] max-h-[200px] 
        xl:max-h-[500px] 2xl:max-h-[550px] xs:max-h-[180px]
        w-auto rounded-full shadow-[0px_0px_30px_0px_rgba(94,206,220,0.5)] 
        transition-all duration-500 hover:shadow-[0px_0px_50px_5px_rgba(94,206,220,0.8)] hover:brightness-110 hover:scale-105"
      />
    </motion.div>
  );
}
