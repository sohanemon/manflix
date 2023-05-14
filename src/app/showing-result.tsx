'use client';

import { selectSearchParams } from '@/slices/video';
import { useSelector } from 'react-redux';

export default function ShowingResult() {
  const searchParam = useSelector(selectSearchParams);

  return (
    <div>
      <h1>
        {searchParam ? (
          <>Showing result for {searchParam}</>
        ) : (
          <>Editors Choice</>
        )}
      </h1>
    </div>
  );
}
