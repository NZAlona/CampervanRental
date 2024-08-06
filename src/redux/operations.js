import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { incrementPage, setDisableMore } from './slice';

axios.defaults.baseURL = 'https://66a30dc544aa6370457fa9f5.mockapi.io';

const options = {
  headers: {
    accept: 'application/json',
  },
};

// export const fetchCampervans = createAsyncThunk(
//   'vans/fetchVans',
//   async ({ page = 1, limit = 4 }, thunkAPI) => {
//     try {
//       const response = await axios.get(`/advert`, {
//         params: {
//           page,
//           limit,
//         },
//         headers: options.headers,
//       });

//       if (response.data.length >= limit) {
//         thunkAPI.dispatch(incrementPage());
//       } else {
//         thunkAPI.dispatch(setDisableMore(true));
//       }

//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchCampervans = createAsyncThunk('vans/fetchVans', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/advert`, {
      options,
    });

    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
