import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  ids: string[];
}

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ mealId: string }>) => {
      state.ids.push(action.payload.mealId);
    },
    removeFavorite: (state, action: PayloadAction<{ mealId: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.mealId), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;