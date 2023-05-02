import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = user.actions;

export default user.reducer;
