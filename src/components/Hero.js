import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import { Search } from '@mui/icons-material';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/heroanimation.json';

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto' id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'
          variants={scrollAnimation}
        >
          <div className=' flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal'>
              {/* Want anything to be easy with <strong>LaslesVPN</strong>. */}
              Find the Perfect Recipe for Any Occasion{' '}
              <strong>Culinary Companion</strong>
            </h1>
            <p className='text-black-500 mt-4 mb-6'>
              {/* Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us. */}
              Showcase Your Culinary Creations and Connect with Fellow Food
              Enthusiasts Discover and Share Delectable Dishes with Ease!
            </p>
            {/* <ButtonPrimary>Get Started</ButtonPrimary> */}

            <div class='relative mb-4 flex w-full flex-wrap items-stretch'>
              <input
                type='search'
                className='py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg border-4 border-orange-500 mr-2 hover:shadow-orange-md transition-all outline-none '
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon1'
              />

              <button
                className='py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none '
                type='button'
                id='button-addon1'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  class='h-5 w-5'
                >
                  <path
                    fill-rule='evenodd'
                    d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                    clip-rule='evenodd'
                  />
                </svg> */}
                <Search />
              </button>
            </div>
          </div>
          <div className='flex w-full'>
            <motion.div className='h-full w-full' variants={scrollAnimation}>
              {/* <Image
                src='/assets/Illustration1.png'
                alt='VPN Illustrasi'
                quality={100}
                width={612}
                height={383}
                layout='responsive'
              /> */}

              <div className='h-[383px] w-[612px]'>
                <Lottie animationData={animationData} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      {/* <div className='relative w-full flex'>
        <ScrollAnimationWrapper className='rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10'>
          {listUser.map((listUsers, index) => (
            <motion.div
              className='flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0'
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className='flex mx-auto w-40 sm:w-auto'>
                <div className='flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full'>
                  <img src={listUsers.icon} className='h-6 w-6' />
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl text-black-600 font-bold'>
                    {listUsers.number}+
                  </p>
                  <p className='text-lg text-black-500'>{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className='absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0'
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div> */}
    </div>
  );
};

export default Hero;
