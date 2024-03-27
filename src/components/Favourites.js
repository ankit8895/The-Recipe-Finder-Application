import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/notfound.json';
import { favouritesRecipesActions } from '../redux/reducers/recipeReducer';

const Favourites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favouritesRecipesArray } = useSelector(
    (state) => state.favouritesRecipesList
  );

  const detailsHandler = (recipe) => {
    const name = recipe.name.replace(/[^a-zA-Z]/g, '');
    localStorage.setItem('recipeDetails', JSON.stringify(recipe));
    navigate(`/search/${name}`);
  };

  const removeHandler = (recipe) => {
    dispatch(favouritesRecipesActions.removeFromFavourites(recipe));
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full pt-20'
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
          <div
            className={`grid grid-cols-1 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 ${
              favouritesRecipesArray && favouritesRecipesArray.length > 0
                ? 'md:grid-cols-2'
                : ''
            }`}
          >
            {favouritesRecipesArray && favouritesRecipesArray.length > 0 ? (
              favouritesRecipesArray.map((recipe, index) => (
                <ScrollAnimationWrapper
                  className='flex justify-center'
                  key={index}
                >
                  <motion.div
                    variants={scrollAnimation}
                    className='w-full h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden'
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div className='md:flex'>
                      <div className='md:shrink-0'>
                        <img
                          className='h-full w-full object-cover md:w-48'
                          src={recipe.images.SMALL.url}
                          alt='recipe'
                        />
                      </div>
                      <div className='p-8 flex flex-col items-start justify-evenly'>
                        <div className='uppercase tracking-wide text-sm text-orange-500 font-semibold text-start'>
                          {recipe.name}
                        </div>
                        <div>
                          {recipe.cuisineType.map((cuisine, idx) => (
                            <p
                              key={idx}
                              className='my-2 text-slate-500 text-start'
                            >
                              {cuisine}{' '}
                            </p>
                          ))}
                        </div>
                        <div className='flex flex-wrap gap-2 items-start justify-start'>
                          <button
                            className='bg-red-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300'
                            onClick={() => removeHandler(recipe)}
                          >
                            Remove
                          </button>

                          <button
                            className='bg-blue-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300'
                            onClick={() => detailsHandler(recipe)}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))
            ) : (
              <ScrollAnimationWrapper className='flex justify-center mx-auto'>
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
