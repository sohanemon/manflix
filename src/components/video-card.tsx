import { chooseOpt } from '@/util/choose-opt';
import Image from 'next/image';
import Link from 'next/link';

export default function VideoCard({
  id,
  thumbnail,
  title,
  author,
  duration,
}: Video) {
  return (
    <Link
      href={`/watch/${id}`}
      className='relative w-full max-w-xs overflow-hidden text-black transition-all bg-white rounded-lg group hover:rounded-none '
    >
      <div className='invisible rotate-2 -rotate-2' />
      <Image
        className={`w-full transition-all duration-500 group-hover:${
          chooseOpt() ? '-' : ''
        }rotate-5 group-hover:brightness-50 group-hover:scale-110 aspect-video`}
        src={thumbnail!}
        alt={title + ' - thumbnail'}
        width={300}
        height={200}
      />
      <div className='absolute inset-x-0 bottom-0 hidden p-2 pt-10 font-medium text-white group-hover:block bg-gradient-to-t from-black via-black/75 to-transparent'>
        <h2>{title}</h2>
        <div className='flex justify-between text-xs text-neutral-300'>
          <h3 className=''>{author}</h3>
          <p>{duration}</p>
        </div>
      </div>
    </Link>
  );
}
