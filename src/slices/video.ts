import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

const fetchVideosThunk = createAsyncThunk(
  'fetch-videos',
  async (payload) => {}
);

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
