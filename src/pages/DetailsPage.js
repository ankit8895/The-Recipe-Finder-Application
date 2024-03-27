import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favouritesRecipesActions } from '../redux/reducers/recipeReducer';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(
    JSON.parse(localStorage.getItem('recipeDetails'))
  );

  const { favouritesRecipesArray } = useSelector(
    (state) => state.favouritesRecipesList
  );

  const favourite = favouritesRecipesArray
    ? favouritesRecipesArray.find((favRecipe) => favRecipe.id === recipe.id)
    : null;

  useEffect(() => {
    if (!recipe) {
      setRecipe(JSON.parse(localStorage.getItem('recipeDetails')));
    }
  }, [recipe]);

  const submitHandler = () => {
    const newRecipe = {
      id: recipe.id,
      name: recipe.name,
      cuisineType: recipe.cuisineType,
      digest: recipe.digest,
      images: recipe.images,
      ingredientLines: recipe.ingredientLines,
    };

    if (!favourite) {
      dispatch(favouritesRecipesActions.addToFavourites(newRecipe));
    } else {
      dispatch(favouritesRecipesActions.removeFromFavourites(favourite));
    }
  };

  return (
    <div className='container mt-10'>
      <div className='max-w-[52rem] mx-auto px-4 pb-18 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
        <div className='py-16 sm:text-center'>
          <h1 className='mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold'>
            {recipe.name}
          </h1>

          <p className='text-lg text-slate-700'>
            {recipe.cuisineType &&
              recipe.cuisineType.map((origin, index) => (
                <span key={index}>{origin}&nbsp;</span>
              ))}
          </p>
          <div className='mt-3 max-w-sm sm:mx-auto sm:px-4'>
            <div className='grow flex mt-3'>
              {favourite ? (
                <button
                  onClick={submitHandler}
                  type='submit'
                  className='bg-red-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300'
                >
                  Remove from Favourite
                </button>
              ) : (
                <button
                  onClick={submitHandler}
                  type='submit'
                  className='bg-green-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300'
                >
                  Add to Favourite
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col justify-center'>
        <div className='overflow-x-auto'>
          <div className='mb-10 min-w-full inline-block align-middle'>
            <h3 className='mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl'>
              Ingredients
            </h3>
            <div className='border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-orange-500'>
                  <tr>
                    <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                      S.No
                    </th>
                    <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                      Ingredients
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {recipe.ingredientLines &&
                    recipe.ingredientLines.map((ingredient, index) => (
                      <tr key={index} className='text-base text-body-color'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700'>
                          {index + 1}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700'>
                          {ingredient}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <div className='mb-10 min-w-full inline-block align-middle'>
            <h3 className='mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl'>
              Composition
            </h3>
            <div className='border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-orange-500'>
                  <tr>
                    <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                      S.No
                    </th>
                    <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                      Composition
                    </th>
                    <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {recipe.digest &&
                    recipe.digest.map((composition, index) => (
                      <tr key={index} className='text-base text-body-color'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700'>
                          {index + 1}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700'>
                          {composition.label}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700'>
                          {composition.total} {composition.unit}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
