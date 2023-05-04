import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

const fetchVideosThunk = createAsyncThunk('fetch-videos', async (payload) => {
  const url =
    'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1df37e59aemshcfc14c3df1f5426p1361d2jsnfdfa8460b0b2',
      'X-RapidAPI-Host':
        'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
