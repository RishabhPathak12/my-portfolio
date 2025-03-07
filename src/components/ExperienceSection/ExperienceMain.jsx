import React from 'react'
import {ExperienceText} from './ExperienceText'
import {ExperienceTop} from './ExperienceTop'
import { AllExperience } from './AllExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'

export const ExperienceMain = () => {
  return (
    <div id='experience' className=' max-w-[1200px] mx-auto px-4'>
    <motion.div variants={fadeIn('down', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
        <ExperienceText/>
        </motion.div>
        <motion.div variants={fadeIn('down', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
        <ExperienceTop/>
        </motion.div>
        <div className='w-full h-1 bg-[#D3D3D3] lg:block sm:hidden'></div>
        <AllExperience/>
   
    </div>
  )
}
