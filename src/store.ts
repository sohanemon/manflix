import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import video from './slices/video';

const store = configureStore({
  reducer: {
    user: user,
    videos: video,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
