'use client';

import { selectSearchParams } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function ShowingResult() {
  const searchParam = useSelector(selectSearchParams);
  if (searchParam)
    return (
      <div>
        <h1>Showing result for {searchParam}</h1>
      </div>
    );
}
