import { RootState } from '@/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface VideoStateProps {
  videos: Video[];
}
const initialState: VideoStateProps = {
  videos: [],
};

export const fetchVideosThunk = createAsyncThunk(
  'fetch-videos',
  async (payload) => {
    const res = await fetch(
      'http://localhost:3000/api/v2/video?query=abdullah bin abdur razzak new',
      {
        next: { revalidate: 50 },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const videos: Video[] = await res.json();
    return videos;
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVideosThunk.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const {} = videoSlice.actions;

export const selectVideos = (state: RootState) => state?.videos.videos;

export default videoSlice.reducer;
