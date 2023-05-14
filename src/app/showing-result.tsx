'use client';

import { selectSearchParams } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function ShowingResult() {
  const searchParam = useSelector(selectSearchParams);

  return (
    <div className='mx-auto lg:w-3/4'>
      <h1 className='mb-6 text-2xl tracking-wider'>
        {searchParam ? (
          <>Showing result for {searchParam}</>
        ) : (
          <>Editor&apos;s Choice</>
        )}
      </h1>
    </div>
  );
}
