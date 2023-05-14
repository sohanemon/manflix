'use client';

import VideoCardSkeletons from '@/components/video-card-skeletone';
import { selectQueryState, selectVideos } from '@/slices/video';
import { useSelector } from 'react-redux';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';
import useFetcher from '@/hooks/use-fetcher';

export default function Index() {
  const videos = useSelector(selectVideos);
  const [isPending, isError] = useSelector(selectQueryState);
  useFetcher();
  return (
    <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:w-3/4'>
      {isPending
        ? [...Array(6).fill(null)].map((i, idx) => (
            <VideoCardSkeletons key={idx} />
          ))
        : videos?.map((video) => (
            <VideoCard key={video.id} {...video}></VideoCard>
          ))}
      {!isPending && <ShowMore />}
    </div>
  );
}
