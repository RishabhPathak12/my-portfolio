import React from 'react'

export const SubHeroSection = () => {
    return (
        <div className='w-full border-y border-cyan-400 text-cyan-300 flex flex-wrap justify-center uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl py-6 md:py-8 items-center gap-6 md:gap-12 text-center'>

            <p className='bg-cyan-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300'>
                Fast Learner
            </p>
            <p className='bg-cyan-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300'>
                Team Work
            </p>
            <p className='bg-cyan-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300'>
                Details Master
            </p>
            <p className='bg-cyan-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300'>
                Problem Solver
            </p>

        </div>
    )
}
