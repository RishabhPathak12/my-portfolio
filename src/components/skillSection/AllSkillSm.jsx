import React from 'react';
import { FaHtml5, FaCss3, FaPhp, FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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

export const AllSkillSm = () => {
    return (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-12'>
            {skills.map((item, index) => (
                <motion.div  variants={fadeIn('up', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-[#FFA500] transition-transform transform hover:scale-110 duration-300' />
                    <p className='text-center mt-4 text-white font-semibold'>{item.skill}</p>
                </motion.div>
            ))}
        </div>
    );
};
