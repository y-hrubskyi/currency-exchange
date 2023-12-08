import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'api/getUserInfo';

export const fetchBaseCurrencyThunk = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, { rejectWithValue }) => {
    try {
      const data = await getUserInfo(coords);

      return data.results[0].annotations.currency.iso_code;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);
