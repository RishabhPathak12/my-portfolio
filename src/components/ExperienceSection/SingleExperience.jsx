import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'


export const SingleExperience = ({ experience }) => {
  return (
    <motion.div 
     variants={fadeIn('right', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}
    className="md:h-[370px] md:w-[350px] sm:h-auto sm:w-full border-2 border-amber-400 border-dashed rounded-2xl mt-6 p-6 bg-gray-900">
      <p className="font-bold text-cyan-400 text-lg">{experience.job}</p>
      <p className="text-amber-500 text-md">{experience.company}</p>
      <p className="text-gray-400 text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-5 text-gray-300 space-y-2">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};
