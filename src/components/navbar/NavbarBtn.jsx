import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='min-w-[120px] px-3 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg 
      font-bold text-white border-2 border-cyan-500 flex items-center gap-1 sm:gap-2 
      bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 
      transition-all duration-200 shadow-md shadow-cyan-400 hover:shadow-lg hover:shadow-cyan-500 
      active:scale-95 focus:ring-4 focus:ring-cyan-300'>
      
      Hire me
      <LuArrowDownRight className="text-lg sm:text-xl md:text-2xl" />
    </button>
  );
}

export default NavbarBtn;
