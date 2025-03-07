import React from 'react';
import { SkillsText } from './SkillsText';
import { AllSkills } from './AllSkills';
import { AllSkillSm } from './AllSkillSm';
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'


export const SkillsMain = () => {
  return (
    <div id='skills' className='py-12'>
      <div className='max-w-[1200px] px-4 mx-auto relative overflow-hidden'>
        <motion.div variants={fadeIn('down', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
        <SkillsText />
        </motion.div>
        <div className='  hidden lg:flex justify-center mt-8'>
          <AllSkills />
        </div>
        <div className='flex lg:hidden justify-center mt-8'>
          <AllSkillSm />
        </div>
        

      </div>
    </div>
  );
};
