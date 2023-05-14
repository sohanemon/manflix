import { fetchVideosThunk, selectVideos } from '@/slices/video';
import { AppDispatch } from '@/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFetcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const videos = useSelector(selectVideos);
  useEffect(() => {
    if (!videos.length)
      dispatch(fetchVideosThunk('trending web development technology'));
  }, [dispatch, videos.length]);
};

export default useFetcher;
