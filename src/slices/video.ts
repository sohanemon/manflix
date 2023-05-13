import { RootState } from '@/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  value: 0,
  value2: 2,
};

export const fetchVideosThunk = createAsyncThunk(
  'fetch-videos',
  async (payload) => {
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
    return videos;
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVideosThunk.fulfilled, (state, action) => {
        console.log('🛑 ~ builder.addCase ~ action:', action);
        console.log('🛑 ~ builder.addCase ~ state:', state);
      })
      .addCase('videos/increment', function (state) {
        state.value2++;
      });
  },
});

export const { increment } = videoSlice.actions;

// export const selectValues = (state: RootState) => {
//   return { value: state.value, value2: state.value2 };
// };
export default videoSlice.reducer;
