import React from 'react'

export const AboutMeImg = () => {
  return (
    <div className='relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]'>
      
      {/* Image Container */}
      <div className='relative w-full aspect-[3/4] rounded-[80px] overflow-hidden'>
        <img 
          src="Rishabh.png" 
          alt="About Me" 
          className='w-full h-full object-cover' 
        />
      </div>

      {/* Orange Background Shape */}
      <div className='absolute bottom-[-20px] left-[-20px] w-[90%] h-full 
      bg-cyan-500 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[120px] rounded-tl-[20px] -z-10'>
      </div>

    </div>
  )
}
