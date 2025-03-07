import React from 'react'
import { ExperienceInfo } from './ExperienceInfo'

export const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-full max-w-[400px] mx-auto md:max-w-[500px] lg:max-w-[600px]'>
      <p className='text-orange-300 font-bold uppercase text-2xl md:text-3xl font-special text-center'>
        Since 2022
      </p>

      <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
        <ExperienceInfo number='3' text='years' />
        <p className='font-bold text-5xl text-[#D3D3D3] hidden sm:block'>-</p>
        <ExperienceInfo number='10+' text='websites' />
      </div>

      <p className='text-center text-white text-sm md:text-base lg:text-lg px-4'>
        With 3 years of experience building dynamic and user-friendly web applications.
      </p>

      <div className="flex justify-center">
        <ExperienceInfo number='$100k' text='Max Budget' />
      </div>
    </div>
  )
}
