import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    cars: [],
  },
  reduсers:{
    addFavorite(state, action){
      state.cars.push(action.payload)
    }
  },
    removeFavorite(state, action){
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    }
})
export default favoriteSlice;
export const favoriteReducer = favoriteSlice.reducer;
export const {addFavorite, removeFavorite} = favoriteSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  favoriteReducer
);