'use client';

import { fetchVideosThunk, selectVideos } from '@/slices/video';
import { AppDispatch } from '@/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchVideosThunk('abdullah bin abdur razzak 2023'));

    return () => {};
  }, [dispatch]);

  const videos = useSelector(selectVideos);

  return (
    <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-evenly lg:w-3/4'>
      {videos?.map((video) => (
        <VideoCard key={video.id} {...video}></VideoCard>
      ))}

      <ShowMore />
    </div>
  );
}
