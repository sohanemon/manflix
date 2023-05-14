import Fetcher from '@/app/fetcher';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className='w-max'>
      <h1 className='flex items-center justify-between text-3xl font-bold'>
        <p>MAN </p> <p className='text-primary-500'>FLIX</p>
      </h1>
      <p className='leading-3 tracking-wider text-secondary-500'>
        Awesome Videos
      </p>
      <Fetcher />
    </Link>
  );
}
