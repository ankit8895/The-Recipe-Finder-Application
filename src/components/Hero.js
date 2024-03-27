import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import { ArrowCircleRight } from '@mui/icons-material';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/heroanimation.json';

const Hero = () => {
  const navigate = useNavigate();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const clickHandler = () => {
    navigate('/search');
  };
  return (
    <div className='max-w-screen-xl my-24 px-8 xl:px-16 mx-auto' id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'
          variants={scrollAnimation}
        >
          <div className=' flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal'>
              Find the Perfect Recipe for Any Occasion{' '}
              <strong>Culinary Companion</strong>
            </h1>
            <p className='text-black mt-4 mb-6'>
              Showcase Your Culinary Creations and Connect with Fellow Food
              Enthusiasts Discover and Share Delectable Dishes with Ease!
            </p>

            <button
              className='py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-orange-500 hover:shadow-orange-400 transition-all outline-none'
              onClick={clickHandler}
            >
              Let's Search <ArrowCircleRight />
            </button>
          </div>
          <div className='flex w-full'>
            <motion.div className='h-full w-full' variants={scrollAnimation}>
              <div className='h-[383px] w-[612px]'>
                <Lottie animationData={animationData} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
