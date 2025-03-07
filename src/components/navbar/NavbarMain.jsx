import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full top-0 left-0 z-50 bg-[#111827]/90 backdrop-blur-lg shadow-md'>
      <div className='max-w-[1300px] mx-auto px-6 flex justify-between items-center py-4'>

        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Navbar Links */}
        <div className='hidden lg:flex'>
          <NavbarLinks />
        </div>

        {/* Hire Me Button */}
        <NavbarBtn />

        {/* Hamburger Menu (Mobile) */}
        <button 
          className='lg:hidden p-3 bg-gray-900 rounded-full border border-cyan-500' 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose className='text-white text-2xl' /> : <GiHamburgerMenu className='text-white text-2xl' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#111827] border-l border-cyan-500 p-6 flex flex-col gap-6 items-start transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className='self-end p-2 text-white text-2xl'
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </button>
        <NavbarLinks />
      </div>
    </nav>
  );
}

export default NavbarMain;
