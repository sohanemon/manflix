'use client';

import { videoFetcher } from '@/lib/fetcher';
import { fetchVideosThunk, selectVideos } from '@/slices/video';
import { use, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';
import { AppDispatch } from '@/store';

export default function Index() {
  // const videos = use(videoFetcher('abdullah bin abdur razzak new'));
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchVideosThunk('abdullah bin abdur razzak 2023'));

    return () => {};
  }, []);

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
