import { createSlice } from '@reduxjs/toolkit';
import { getCars, getFilteredCars } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog.push(...action.payload);

  state.error = null;
  state.isFilter = false;
};

const handleFilteredFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog = action.payload;

  state.error = null;
  state.isFilter = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
      catalog: [],
      isLoading: false,
      error: null,
      isFilter: false,
      loadedCount: 0,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getCars.pending, handlePending)
        .addCase(getCars.fulfilled, handleFulfilled)
        .addCase(getCars.rejected, handleRejected)
        .addCase(getFilteredCars.pending, handlePending)
        .addCase(getFilteredCars.fulfilled, handleFilteredFulfilled)
        .addCase(getFilteredCars.rejected, handleRejected);
    },
  }
)

export const carsReducer = carsSlice.reducer;