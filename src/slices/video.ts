import { videoFetcher } from '@/lib/fetcher';
import { RootState } from '@/store';
import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from '@reduxjs/toolkit';

interface VideoStateProps {
  videos: Video[];
}
const initialState: VideoStateProps = {
  videos: [],
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
