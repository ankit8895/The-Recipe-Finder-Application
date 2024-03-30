import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import animationData1 from '../assets/animation/food1.json';
import animationData2 from '../assets/animation/food2.json';
import animationData3 from '../assets/animation/food3.json';

const Details = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full'
      id='details'
    >
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'
            >
              Let's cook
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal mx-auto my-2 text-center'
            >
              Welcome to Culinary Companion, your go-to destination for culinary
              inspiration and expertise. We're passionate about making cooking a
              delightful and accessible experience for everyone, from seasoned
              chefs to kitchen novices.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  {/* <Image
                    src='/assets/Free.png'
                    width={145}
                    height={165}
                    alt='Free Plan'
                  /> */}
                  {/* <div className='w-[145px] h-[165px]'> */}
                  <Lottie animationData={animationData1} />
                  {/* </div> */}
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  There is no sincerer love than the love of food
                </p>

                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <p className='text-2xl text-black-600 text-center mb-4 '>
                    - George B. Shaw
                  </p>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  {/* <Image
                    src='/assets/Standard.png'
                    width={145}
                    height={165}
                    alt='Standard Plan'
                  /> */}
                  {/* <div className='w-[145px] h-[165px]'> */}
                  <Lottie animationData={animationData2} />
                  {/* </div> */}
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  You don't need a silver fork to eat good food
                </p>

                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <p className='text-2xl text-black-600 text-center mb-4 '>
                    - Paul Prudhomme
                  </p>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4 '
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  {/* <Image
                    src='/assets/Premium.png'
                    width={145}
                    height={165}
                    alt='Premium Plan'
                  /> */}
                  {/* <div className='w-[145px] h-[165px]'> */}
                  <Lottie animationData={animationData3} />
                  {/* </div> */}
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  Food is symbolic of love when words are inadequate
                </p>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <p className='text-2xl text-black-600 text-center mb-4 '>
                    - Alan D. Wolfelt
                  </p>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
