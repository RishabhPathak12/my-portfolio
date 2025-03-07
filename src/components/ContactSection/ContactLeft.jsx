import React from 'react'
import { ContactFrom } from './ContactFrom'

export const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
          <h2 className='text-amber-400 text-3xl mb-4'>Get In Touch</h2>
          <p className='text-white'>Feel free to reach out if you'd like to collaborate <br />you are just a few clicks away!</p>  
        </div>
        <ContactFrom/>
    </div>
  )
}
