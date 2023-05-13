'use client';
import { videoFetcher } from '@/lib/fetcher';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';
import { use } from 'react';
import { selectVideos } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function Index() {
  const videos = use(videoFetcher('abdullah bin abdur razzak new'));
  const searchedVideos = useSelector(selectVideos);
  return (
    <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-evenly lg:w-3/4'>
      {!searchedVideos.length &&
        videos?.map((video) => (
          <VideoCard key={video.id} {...video}></VideoCard>
        ))}
      <ShowMore />
    </div>
  );
}
