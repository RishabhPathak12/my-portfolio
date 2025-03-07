import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactFrom = () => {

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('');
const [success,setSuccess]=useState('');

const handlName=(e)=>{
setName(e.target.value)
}
const handlEmail=(e)=>{
  setEmail(e.target.value)

}
const handlMessage=(e)=>{
  setMessage(e.target.value)
  
}

  const form = useRef(); 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1hkzsgi', 'template_r8yurxy', form.current, {
        publicKey: '4YO3j5mdtXAuy0nPR',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <p className='text-cyan-500'>{success}</p>
      <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
        <input
        value={name}
        onChange={handlName}
          name='from_name'
          type="text"
          placeholder='Your Name'
          required
          className='h-12 rounded-lg bg-[#C4A484] px-2'
        />
        <input
        value={email}
        onChange={handlEmail}
          name='from_email'
          type="email"
          placeholder='Your Email'
          required
          className='h-12 rounded-lg  bg-[#C4A484] px-2'
        />
        <textarea
        value={message}
        onChange={handlMessage}
          name='message'
          placeholder='Message'
          rows='9'
          required
          className='rounded-lg bg-[#C4A484] p-2'
        />
        <button
          type='submit'
          className='w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl hover:bg-cyan-500 bg-cyan-500 transition-all duration-500'
        >
          Send
        </button>
      </form>
    </div>
  );
};
