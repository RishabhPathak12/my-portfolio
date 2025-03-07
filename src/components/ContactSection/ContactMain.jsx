import React from 'react'
import { ContactLeft } from './ContactLeft'
import { ContactRight } from './ContactRight'

export const ContactMain = () => {
  return (
    <div id='contact' className='w-full max-w-[1200px] mx-auto mt-16 sm:mt-20 md:mt-24 pt-4 px-4'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl text-cyan-500 mb-8 sm:mb-10 text-center'>Contact Me</h2>
        <div className='flex flex-col lg:flex-row justify-between gap-10 md:gap-16 lg:gap-24 bg-[#8B4513] p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl'>
            <ContactLeft />
            <ContactRight />
        </div>
    </div>
  )
}
