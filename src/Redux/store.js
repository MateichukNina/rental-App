import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { carsReducer} from "./cars/carsSlice";
import {filterReducer} from "./filter/filterSlice";
import { favoriteReducer} from "./favorites/favoriteSlice";

export const store = configureStore({
  reducer:{
    cars: carsReducer,
    favorite: favoriteReducer,
    filter: filterReducer, }
})

export const persistor = persistStore(store);