// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getUserInfo } from 'api/getUserInfo';

// export const fetchBaseCurrencyThunk = createAsyncThunk(
//   'fetch/baseCurrency',
//   async (coords, { rejectWithValue }) => {
//     try {
//       const data = await getUserInfo(coords);
//         console.log('data: ', data.results[0].annotations.currency.iso);

//       return data;
//     } catch (err) {
//       return rejectWithValue(err.data);
//     }
//   }
// );
