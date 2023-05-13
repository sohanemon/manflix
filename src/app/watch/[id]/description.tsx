'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface DescriptionProps {
  description: string;
}
export default function Description({ description }: DescriptionProps) {
  const [isShowMore, setShowMore] = useState(false);
  return (
    <>
      <motion.p
        layout
        className='mb-5 text-sm text-justify'
        transition={{ type: 'just' }}
      >
        {isShowMore ? (
          description
        ) : (
          <>
            {description.slice(0, 250)}
            {' . . . '}
            <button
              className='hover:text-primary-300'
              onClick={() => setShowMore((p) => !p)}
            >
              {' '}
              see more
            </button>
          </>
        )}
      </motion.p>
      {isShowMore && (
        <button
          className='block px-4 py-2 mx-auto my-2 text-xs rounded-full hover:text-primary-500 ring-1 ring-current'
          onClick={() => setShowMore((p) => !p)}
        >
          Close description
        </button>
      )}
    </>
  );
}
