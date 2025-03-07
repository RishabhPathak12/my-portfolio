import React from 'react'
import {ProjectText} from './ProjectText';  // ✅ Default export fix
import SingleProject from './SingleProject';
import { motion } from 'framer-motion'
import { fadeIn } from '../../frameMotion/variants'

const projects = [
    {
        name: 'Amazon Clone', // ✅ Typo fixed
        date: 'Nov 2023',
        align: 'left',  // ✅ Fixed (aling → align)
        image: 'website-img-1.jpg',
        link: '#'
    },
    {
        name: 'Online Study Portal',
        date: 'Sept 2024',
        align: 'right',
        image: 'website-img-2.jpg',
        link: '#'
    },
    {
        name: 'E-commerce Clone', // ✅ Typo fixed
        date: 'Jan 2025',
        align: 'left',
        image: 'website-img-3.jpg',
        link: '#'
    }
]

export const ProjectMain = () => {
    return (
        <div id='project' className='mx-w-[1200px] mx-auto px-4'>
            <motion.div variants={fadeIn('up', '0.2')} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} >
            <ProjectText />
            </motion.div>
            <div className='flex flex-col gap-20 max-w-[980px] mx-auto mt-12'>
                {projects.map((item, index) => (
                    <SingleProject key={index}
                        name={item.name} 
                        year={item.date}
                        image={item.image}  // ✅ Fixed (year → date)
                        align={item.align}  // ✅ Fixed (aling → align)
                        link={item.link} />
                ))}
            </div>
        </div>
    )
}

