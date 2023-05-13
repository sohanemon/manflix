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
      <motion.p layout className='text-justify'>
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
    </>
  );
}
