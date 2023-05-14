import { videoFetcher } from '@/lib/fetcher';
import { RootState } from '@/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface VideoStateProps {
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  searchTriggered: boolean;
}
const initialState: VideoStateProps = {
  videos: [],
  isLoading: true,
  isError: false,
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
    builder
      .addCase(fetchVideosThunk.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideosThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
      });
  },
});

export const { triggerSearch } = videoSlice.actions;

export const selectVideos = (state: RootState) => state?.videos.videos;

export const selectQueryState = (state: RootState) => [
  state.videos.isLoading,
  state.videos.isError,
];

export default videoSlice.reducer;
