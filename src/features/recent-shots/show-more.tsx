'use client';

import { selectVideos } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function ShowMore() {
  const searchedVideos = useSelector(selectVideos);
  console.log('🛑 ~ ShowMore ~ searchedVideos:', searchedVideos);

  return (
    <>
      <div
        onClick={() => window.alert('Why are you so greedy?')}
        className='grid w-full h-full text-xl font-semibold tracking-wider transition-all cursor-pointer place-content-center active:scale-95'
      >
        Show more
      </div>
    </>
  );
}
