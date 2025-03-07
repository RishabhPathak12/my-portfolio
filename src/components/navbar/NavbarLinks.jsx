import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "project" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ isMobile = false, onClose }) => {
  return (
    <ul className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-wrap justify-center gap-6'} text-white font-bold text-center py-4 text-sm md:text-base`}>
      {links.map((item, index) => (
        <li key={index} className="relative">
          <Link
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={onClose} 
            className="relative inline-block text-white transition-all duration-300 
            hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400 
            after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] 
            after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
          >
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
