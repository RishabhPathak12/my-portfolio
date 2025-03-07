import React from 'react';

const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "project" },
    { link: "Contact", section: "contact" },
];

export const FooterMain = () => {
    return (
        <div className="px-4">
            
            <div className="w-full h-[1px] bg-gray-400 mt-24"></div>

           
            <div className="flex flex-col md:flex-row justify-between mt-4 max-w-[1200px] mx-auto text-center md:text-left">
               
                <p className="text-3xl text-[#D2B48C]">Rishabh Kumar</p>

             
                <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-[#D2B48C] text-xl mt-4 md:mt-0">
                    {links.map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.section}`} className="hover:text-white transition-all duration-500 cursor-pointer">
                                {item.link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Copyright */}
            <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-sm text-[#D2B48C]">
                © 2025 Rishabh Kumar | All Rights Reserved.
            </p>
        </div>
    );
};
