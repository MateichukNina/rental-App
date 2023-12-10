
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCars = createAsyncThunk(
  'cars/catalog',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('https://6571028b09586eff66422b69.mockapi.io/adverts', {
        params: {
          page: page,
          limit: 12,
        },
      });

   

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCars = createAsyncThunk(
  'cars/filteredCars',
  async ({ make, price }, thunkAPI) => {
    const filter =
      (make !== null && make) || (price !== null && '$' + String(price));

      try {
        const response = await axios.get('https://6571028b09586eff66422b69.mockapi.io/adverts', {
          params: {
            filter: filter,
            limit: 12,
          },})

        return response.data;
      }catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


