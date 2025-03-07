import React from 'react';
import { FaHtml5, FaCss3, FaPhp, FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SingleSkills } from './SingleSkills';
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'


const skills = [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3 },
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "React.js", icon: FaReact },
    { skill: "PHP", icon: FaPhp },
    { skill: "Laravel", icon: FaLaravel },
    { skill: "MySQL", icon: SiMysql },
    { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

export const AllSkills = () => {
  return (
    <div className='flex items-center justify-between relative gap-2 max-w-[1200px] mx-auto flex-wrap'>
      {skills.map((item, index) => (
        <motion.div variants={fadeIn('right', `0.${index}`)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
        <SingleSkills key={index} text={item.skill} imgsvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};
