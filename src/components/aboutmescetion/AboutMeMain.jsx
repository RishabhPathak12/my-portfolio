import React from 'react'
import { AboutMeText } from './AboutMeText'
import { AboutMeImg } from './AboutMeImg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'


export const AboutMeMain = () => {
  return (
    <div id='about' className='flex flex-col md:flex-row gap-12 md:gap-16 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto mt-[100px] justify-center items-center'>
      {/* Left Section (Text) */}
      <motion.div variants={fadeIn('right', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} className="w-full md:w-1/2">
        <AboutMeText />
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div variants={fadeIn('left', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}  className="w-full md:w-1/2 flex justify-center">
        <AboutMeImg />
      </motion.div>
    </div>
  )
}
