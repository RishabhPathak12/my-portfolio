import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SingleInfo } from './SingleInfo';

export const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="pathakrishabh94@gmail.com" Image={MdOutlineEmail}/>
        <SingleInfo text="+91 8081682107" Image={MdOutlinePhoneInTalk}/>
        <SingleInfo text="fundanpur Amethi" Image={IoLocationOutline}/>

       
    </div>
  )
}
