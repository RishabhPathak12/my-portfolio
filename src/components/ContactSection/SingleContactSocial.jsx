import React from 'react';

export const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className='text-2xl h-12 w-12 border border-amber-400 text-amber-400 rounded-full p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110'>
        <Icon />
      </div>
    </a>
  );
};
