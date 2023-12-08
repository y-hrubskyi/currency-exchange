import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchBaseCurrencyThunk } from './operations';

const currencySlice = createSlice({
  name: 'currency',

  initialState: { baseCurrency: '' },

  reducers: {
    setDefaultBaseCurrency(state) {
      state.baseCurrency = 'USD';
    },
  },
  extraReducers: build =>
    build.addCase(fetchBaseCurrencyThunk.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export const { setDefaultBaseCurrency } = currencySlice.actions;

const persistConfig = {
  key: 'currency',
  storage,
  whitelist: ['baseCurrency'],
};

export const currencyReducer = persistReducer(
  persistConfig,
  currencySlice.reducer
);
