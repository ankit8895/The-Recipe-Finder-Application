import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipeList = createAsyncThunk(
  'fetchRecipeList',
  async (text, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&$app_id=4fc2e6f0&app_key=ee561fb90c25e2bc8137ab9751041f93`
      );

      return fulfillWithValue(data.hits);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
      throw rejectWithValue(error);
    }
  }
);

const recipeListSlice = createSlice({
  name: 'recipeList',
  initialState: {
    loading: false,
    recipeArray: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipeList.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeArray = action.payload;
    });
    builder.addCase(fetchRecipeList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const recipeListReducer = recipeListSlice.reducer;

const favouritesRecipesSlice = createSlice({
  name: 'favouritesRecipes',
  initialState: {
    favouritesRecipesArray: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      const { id, name, cuisineType, digest, images, ingredientLines } =
        action.payload;
      state.favouritesRecipesArray.push({
        id,
        name,
        cuisineType,
        digest,
        images,
        ingredientLines,
      });

      localStorage.setItem(
        'favouritesRecipeList',
        JSON.stringify(state.favouritesRecipesArray)
      );
    },
    removeFromFavourites: (state, action) => {
      const { id } = action.payload;
      state.favouritesRecipesArray = state.favouritesRecipesArray.filter(
        (favRecipe) => favRecipe.id !== id
      );
      localStorage.setItem(
        'favouritesRecipeList',
        JSON.stringify(state.favouritesRecipesArray)
      );
    },
  },
});

const favouritesRecipesReducer = favouritesRecipesSlice.reducer;
const favouritesRecipesActions = favouritesRecipesSlice.actions;

export {
  recipeListReducer,
  favouritesRecipesReducer,
  favouritesRecipesActions,
};
