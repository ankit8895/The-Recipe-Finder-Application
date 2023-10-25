import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/notfound.json';

const Favourites = () => {
  const favourites = useSelector((state) => state.favouritesRecipesList);

  const { favouritesRecipesArray } = favourites;

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'
      id='favourites'
    >
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'
            >
              Favourites Recipe
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal mx-auto my-2 text-center'
            >
              Never Miss a Recipe, Even Without Internet Connection
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-flow-row grid-cols-1 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            {favouritesRecipesArray && favouritesRecipesArray.length > 0 ? (
              favouritesRecipesArray.map((recipe, index) => (
                <ScrollAnimationWrapper
                  className='flex justify-center'
                  key={index}
                >
                  <motion.div
                    variants={scrollAnimation}
                    className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div class='md:flex'>
                      <div class='md:shrink-0'>
                        {/* <img
            class='h-48 w-full object-cover md:h-full md:w-48'
            src='https://loremflickr.com/g/320/240/team'
          /> */}
                      </div>
                      <div class='p-8'>
                        <div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                          Company retreats
                        </div>
                        <a
                          href='/'
                          class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
                        >
                          Incredible accommodation for your team
                        </a>
                        <p class='mt-2 text-slate-500'>
                          Looking to take your team away on a retreat to enjoy
                          awesome food and take in some sunshine? We have a list
                          of places to do just that.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))
            ) : (
              <ScrollAnimationWrapper className='flex justify-center'>
                <motion.div
                  variants={scrollAnimation}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Lottie animationData={animationData} />
                </motion.div>
              </ScrollAnimationWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
