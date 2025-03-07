import React from 'react'

export const ExperienceInfo = ({ number, text }) => {
    return (
        <div className='flex flex-col items-center'>
            <p className='font-bold text-5xl sm:text-6xl lg:text-7xl text-cyan-400'>
                {number}
            </p>
            <p className='font-bold text-lg sm:text-xl lg:text-2xl text-[#D3D3D3] uppercase -mt-2 sm:-mt-3 lg:-mt-4'>
                {text}
            </p>
        </div>
    )
}
