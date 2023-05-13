import { videoFetcher } from '@/lib/fetcher';
import { RootState } from '@/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface VideoStateProps {
  videos: Video[];
  searchTriggered: boolean;
}
const initialState: VideoStateProps = {
  videos: [],
  searchTriggered: false,
};

export const fetchVideosThunk = createAsyncThunk(
  'fetch-videos',
  async (searchParam: string) => {
    return await videoFetcher(searchParam);
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    triggerSearch(state, { payload }) {
      state.searchTriggered = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchVideosThunk.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const { triggerSearch } = videoSlice.actions;

export const selectVideos = (state: RootState) => state?.videos.videos;

export default videoSlice.reducer;
