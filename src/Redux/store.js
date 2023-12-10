import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { carsReducer} from "./cars/carsSlice";
import {filterReducer} from "./filter/filterSlice";
import { persistedReducer } from "./favorites/favoriteSlice";

export const store = configureStore({
  reducer:{
    cars: carsReducer,
    favorite: persistedReducer,
    filter: filterReducer, }
})

export const persistor = persistStore(store);