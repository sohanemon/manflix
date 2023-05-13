'use client';

import { selectVideos, triggerSearch } from '@/slices/video';
import { AppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowMore() {
  const searchedVideos = useSelector(selectVideos);
  const dispatch = useDispatch<AppDispatch>();
  console.log('🛑 ~ ShowMore ~ searchedVideos:', searchedVideos);

  return (
    <>
      <div
        onClick={() => {
          window.alert('Why are you so greedy?');
          dispatch(triggerSearch(true));
        }}
        className='grid w-full h-full text-xl font-semibold tracking-wider transition-all cursor-pointer place-content-center active:scale-95'
      >
        Show more
      </div>
    </>
  );
}
