import { configureStore } from '@reduxjs/toolkit';
import { recipeListReducer } from './reducers/recipeReducer';
import { favouritesRecipesReducer } from './reducers/recipeReducer';

const favouritesRecipeFromStorage = localStorage.getItem('favouritesRecipeList')
  ? JSON.parse(localStorage.getItem('favouritesRecipeList'))
  : [];

const preloadedState = {
  favouritesRecipesList: {
    favouritesRecipesArray: favouritesRecipeFromStorage,
  },
};

const store = configureStore({
  reducer: {
    recipeList: recipeListReducer,
    favouritesRecipesList: favouritesRecipesReducer,
  },
  preloadedState,
});

export default store;
