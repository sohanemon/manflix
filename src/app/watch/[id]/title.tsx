'use client';

import { fade } from '@/lib/variants';
import { motion } from 'framer-motion';

interface Props {
  title: string;
}
export default function Title(props: Props) {
  return (
    <motion.h1
      variants={fade}
      animate={'visible'}
      initial={'hidden'}
      className='text-xl tracking-wide text-white '
    >
      {props.title}
    </motion.h1>
  );
}
