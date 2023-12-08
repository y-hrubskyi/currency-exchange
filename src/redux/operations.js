import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'api/getUserInfo';

export const fetchBaseCurrencyThunk = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedCurrency = state.currency.baseCurrency;

    if (persistedCurrency) {
      return thunkAPI.rejectWithValue('Base currency is already exist');
    }

    try {
      const data = await getUserInfo(coords);

      return data.results[0].annotations.currency.iso_code;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.data);
    }
  }
);
