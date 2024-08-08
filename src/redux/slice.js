import { createSlice } from '@reduxjs/toolkit';
import { fetchCampervans } from './operations';

const campervanSlice = createSlice({
  name: 'vans',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampervans.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampervans.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampervans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campervansReducer = campervanSlice.reducer;
