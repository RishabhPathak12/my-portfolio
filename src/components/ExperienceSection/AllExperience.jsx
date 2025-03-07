import React from 'react';
import { SingleExperience } from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'


const experiences = [
  {
    job: 'Full-Stack Developer (Intern)',
    company: 'ABC Solutions',
    date: 'Aug 2024 - Sept 2024',
    responsibilities: [
      'Developed dynamic web applications using Laravel & React.js',
      'Integrated MySQL database for storing user data',
      'Worked on UI improvements using Tailwind CSS',
      'Fixed bugs and optimized API performance'
    ]
  },
  {
    job: 'Personal Project - Expense Tracker',
    company: 'Self Project',
    date: '2024-Present',
    responsibilities: [
      'Developed a personal expense management system using PHP & MySQL',
      'Designed a responsive UI using HTML, CSS, and Bootstrap',
      'Implemented user authentication and data security',
      'Deployed project on a live server'
    ]
  },
  {
    job: 'Personal Project - Library Management',
    company: 'Self Project',
    date: '2023-Present',
    responsibilities: [
      'Built a library management system using Laravel & MySQL',
      'Implemented book borrowing & returning features',
      'Created an admin dashboard for managing books & users',
      'Ensured a responsive design using Bootstrap'
    ]
  }
];

export const AllExperience = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div variants={fadeIn('right', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
            <FaArrowRight className="text-4xl text-amber-400 hidden md:block" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
