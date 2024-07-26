import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66a30dc544aa6370457fa9f5.mockapi.io';

const options = {
  headers: {
    accept: 'application/json',
  },
};

export const fetchCampervans = createAsyncThunk('advert/fetchVans', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/advert`, options);
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
