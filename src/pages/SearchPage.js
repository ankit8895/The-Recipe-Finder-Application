import React, { useMemo, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import { Info } from '@mui/icons-material';
import { fetchRecipeList } from '../redux/reducers/recipeReducer';
import Lottie from 'lottie-react';
import loadingData from '../assets/animation/loading.json';
import notfound from '../assets/animation/notfound.json';
import errorData from '../assets/animation/error.json';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipesResult = useSelector((state) => state.recipeList);
  const { loading, error, recipeArray } = recipesResult;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  console.log('CHECKSS', recipeArray);

  useEffect(() => {
    if (searchText.length > 0) {
      dispatch(fetchRecipeList(searchText));
    }
  }, [searchText, dispatch]);

  const handleClick = (item) => {
    const name = item.recipe.label.replace(/[^a-zA-Z]/g, '');
    const currentRecipe = {
      id: item.recipe.images.THUMBNAIL.url,
      name: item.recipe.label,
      cuisineType: item.recipe.cuisineType,
      digest: item.recipe.digest,
      images: item.recipe.images,
      ingredientLines: item.recipe.ingredientLines,
    };
    localStorage.setItem('recipeDetails', JSON.stringify(currentRecipe));
    navigate(`/search/${name}`);
  };

  return (
    <div className='container py-28'>
      <div className='px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed'
            >
              Search Your Favourite Recipe
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>
      </div>
      <div className='relative mt-6 max-w-lg mx-auto'>
        <ScrollAnimationWrapper>
          <motion.input
            variants={scrollAnimation}
            className='w-full border rounded-md pl-10 pr-4 py-2 focus:border-orange-500 focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Search'
            value={searchText}
            required
            onChange={(e) => setSearchText(e.target.value)}
          />
        </ScrollAnimationWrapper>
      </div>

      {loading ? (
        <div className='w-full h-full flex justify-center items-center my-3'>
          <Lottie animationData={loadingData} />
        </div>
      ) : error ? (
        <div className='w-full h-full flex justify-center items-center my-3'>
          <Lottie animationData={errorData} />
        </div>
      ) : recipeArray && recipeArray.length > 0 ? (
        <div className='my-3'>
          <div className='mx-auto px-6'>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
              {recipeArray.map((item, index) => (
                <div
                  className='w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden'
                  key={index}
                >
                  <div
                    className='flex items-end justify-end h-56 w-full bg-cover'
                    style={{ backgroundImage: `url(${item.recipe.image})` }}
                  >
                    <button
                      className='p-2 rounded-full bg-orange-500 text-white mx-5 mb-4 hover:bg-orange-400 focus:outline-none focus:bg-orange-400'
                      onClick={() => handleClick(item)}
                    >
                      <Info />
                    </button>
                  </div>
                  <div className='px-5 py-3'>
                    <h3 className='text-gray-700 uppercase'>
                      {item.recipe.label}
                    </h3>
                    <span className='text-gray-500 mt-2'>
                      {item.recipe.cuisineType[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-full flex justify-center items-center my-3'>
          <Lottie animationData={notfound} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
