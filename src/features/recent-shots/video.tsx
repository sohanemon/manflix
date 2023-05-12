import Image from 'next/image';
import Link from 'next/link';

export default function Video({ thumbnail, title, author }: Video) {
  return (
    <Link href={'/'} className='w-full max-w-xs text-black bg-white '>
      <Image
        className='w-full aspect-video'
        src={thumbnail!}
        alt={title + ' - thumbnail'}
        width={300}
        height={200}
      />
    </Link>
  );
}
