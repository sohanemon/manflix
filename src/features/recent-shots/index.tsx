'use client';

import VideoCardSkeletons from '@/components/video-card-skeletone';
import useFetcher from '@/hooks/use-fetcher';
import useVideoStore from '@/store/video';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';

export default function Index() {
  const videos = useVideoStore((s) => s.videos);
  const [isLoading, isError] = useVideoStore((s) => [s.isLoading, s.isError]);
  useFetcher();
  return (
    <div className='grid grid-cols-1 gap-5 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:w-3/4'>
      {isLoading
        ? [...Array(6).fill(null)].map((i, idx) => (
            <VideoCardSkeletons key={idx} />
          ))
        : videos?.map((video) => (
            <VideoCard key={video.id} {...video}></VideoCard>
          ))}
      {!isLoading && <ShowMore />}
    </div>
  );
}
