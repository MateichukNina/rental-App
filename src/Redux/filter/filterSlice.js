import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
  name: "filter",
  initialState:{
    make: null,
    price: null,
    mileageFrom: 0,
    mileageTo: 0,
  },
  redusers:{
    carFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
  }

}})


export const filterReducer = filterSlice.reducer;
export const  carsFilter = filterSlice.actions;