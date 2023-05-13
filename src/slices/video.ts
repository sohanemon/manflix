import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

const fetchVideosThunk = createAsyncThunk('fetch-videos', async (payload) => {
  const res = await fetch(
    'http://localhost:3000/api/v2/video?query=abdullah bin abdur razzak new',
    {
      next: { revalidate: 50 },
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const videos: Video[] = await res.json();
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVideosThunk.fulfilled, reducer);
  },
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
