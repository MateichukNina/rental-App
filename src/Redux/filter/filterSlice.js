import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
  name: "filter",
  initialState:{
    make: null,
    price: null,
    mileageFrom: 0,
    mileageTo: 0,
  },
  reduсers:{
    carFilter(state, action) {
      state = { ...state, ...action.payload };
  }

}})


export const filterReducer = filterSlice.reducer;
export const  carFilter = filterSlice.actions;