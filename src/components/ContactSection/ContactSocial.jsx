import React from 'react';
import { SingleContactSocial } from './SingleContactSocial';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://github.com" Icon={FaGithub} />
        <SingleContactSocial link="https://linkedin.com" Icon={FaLinkedin} />
        <SingleContactSocial link="https://instagram.com" Icon={FaInstagram} />
    </div>
  );
};
