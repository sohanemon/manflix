import { videoFetcher } from '@/lib/fetcher';
import { RootState } from '@/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface VideoStateProps {
  searchParams: string;
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  searchTriggered: boolean;
}
const initialState: VideoStateProps = {
  searchParams: '',
  videos: [],
  isLoading: true,
  isError: false,
  searchTriggered: false,
};

// asynchronous thunk
export const fetchVideosThunk = createAsyncThunk(
  'fetch-videos',
  async (searchParam: string) => {
    return await videoFetcher(searchParam);
  }
);

// main video slice [contains reducer + actions]
const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    triggerSearch(state, { payload }) {
      state.searchTriggered = payload;
    },
    updateSearchParam(state, { payload }) {
      state.searchParams = payload;
    },
  },
  extraReducers(builder) {
    builder
      // checking extra reducer with previous state

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

// exporting actions
export const { triggerSearch, updateSearchParam } = videoSlice.actions;

// exporting selections
export const selectVideos = (state: RootState) => state?.videos.videos;
export const selectQueryState = (state: RootState) => [
  state.videos.isLoading,
  state.videos.isError,
];
export const selectSearchParams = (state: RootState) =>
  state.videos.searchParams;

// exporting default reducer
export default videoSlice.reducer;
