import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getUserInfo } from 'api/getUserInfo';
// import { fetchBaseCurrencyThunk } from './operations';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, { rejectWithValue }) => {
    console.log('coords: ', coords);
  }
);

const currencySlice = createSlice({
  name: 'currency',

  initialState: { baseCurrency: '' },

  reducers: {},
  extraReducers: build =>
    build.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export const currencyReducer = currencySlice.reducer;
