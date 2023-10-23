import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipeList = createAsyncThunk(
  'fetchRecipeList',
  async (text, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
      );
      const response = await data.json();
      return fulfillWithValue(response);
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

export const recipeListReducer = recipeListSlice.reducer;
