import React from 'react'

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Cyan Glow - Right Side */}
      <div className='shadow-[0px_0px_350px_250px_rgba(94,206,220,0.9)] absolute top-0 md:right-[300px] lg:right-[400px] blur-[350px] opacity-50 animate-gradientShift'></div>

      {/* Orange Glow - Top Right */}
      <div className='shadow-[0px_0px_350px_250px_rgba(240,169,79,0.8)] absolute top-0 right-0 blur-[350px] opacity-50 animate-gradientShift'></div>

      {/* Pink Glow - Bottom Left */}
      <div className='shadow-[0px_0px_350px_250px_rgba(255,105,180,0.7)] absolute top-[300px] left-0 blur-[350px] opacity-50 animate-gradientShift'></div>

      {/* Purple Glow - Bottom Right */}
      <div className='shadow-[0px_0px_350px_250px_rgba(128,0,128,0.7)] absolute top-[500px] right-0 blur-[350px] opacity-50 animate-gradientShift'></div>
    </div>
  )
}

export default HeroGradient
