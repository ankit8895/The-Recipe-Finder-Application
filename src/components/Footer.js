import React from 'react';

import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='bg-white-300 pt-44'>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4'>
        <div className='row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start '>
          {/* <LogoVPN className='h-8 w-auto mb-6' /> */}Culinary Companion
          <p className='mb-4'>
            <strong className='font-medium'>Culinary Companion</strong> showcase
            your culinary creations and connect with fellow food enthusiasts
          </p>
          <div className='flex w-full mt-2 mb-8 -mx-2'>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Facebook className='h-6 w-6' />
            </div>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Twitter className='h-6 w-6' />
            </div>
            <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
              <Instagram className='h-6 w-6' />
            </div>
          </div>
          <p className='text-gray-400'>
            ©{new Date().getFullYear()} - Culinary Companion
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
