import { configureStore } from '@reduxjs/toolkit';
import { recipeListReducer } from './reducers/recipeReducer';

const favouritesRecipeFromStorage = localStorage.getItem('favouritesRecipeList')
  ? JSON.parse(localStorage.getItem('favouritesRecipeList'))
  : [];

const preloadedState = {
  favouritesRecipes: favouritesRecipeFromStorage,
};

const store = configureStore({
  recipeList: recipeListReducer,
  preloadedState,
});

export default store;
