import Image from 'next/image';
import Link from 'next/link';

export default function Video({ thumbnail, title, author }: Video) {
  return (
    <Link
      href={'/'}
      className='relative w-full max-w-xs text-black bg-white group'
    >
      <Image
        className='w-full aspect-video'
        src={thumbnail!}
        alt={title + ' - thumbnail'}
        width={300}
        height={200}
      />
      <div className='absolute inset-x-0 bottom-0 hidden p-2 pt-10 font-medium text-white group-hover:block bg-gradient-to-t from-black via-black/75 to-transparent'>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
