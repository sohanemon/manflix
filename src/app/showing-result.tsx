'use client';

import { selectSearchParams, selectTriggerSearch } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function ShowingResult() {
  const searchParam = useSelector(selectSearchParams);
  const searchTrigger = useSelector(selectTriggerSearch);

  return (
    <div className='px-4 mx-auto lg:w-3/4'>
      <h1 className='mb-6 text-2xl tracking-wider'>
        {searchParam && searchTrigger ? (
          <>
            Showing results for{' '}
            <span className='select-auto text-primary-500'>{searchParam}</span>
          </>
        ) : (
          <>Editor&apos;s Choice</>
        )}
      </h1>
    </div>
  );
}
