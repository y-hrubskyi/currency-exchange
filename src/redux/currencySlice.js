import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrencyThunk } from './operations';

const currencySlice = createSlice({
  name: 'currency',

  initialState: { baseCurrency: '' },

  reducers: {},
  extraReducers: build =>
    build.addCase(fetchBaseCurrencyThunk.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export const currencyReducer = currencySlice.reducer;
