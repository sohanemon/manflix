import Link from 'next/link';
import LoaderLottie from './loader-lottie';

export default function Logo() {
  return (
    <Link href={'/'} className='flex items-center w-max '>
      <LoaderLottie className='w-14' />
      <div className='flex flex-col '>
        <h1 className='flex items-center justify-between text-2xl font-bold '>
          <p>MAN </p> <p className='text-primary-500'>FLIX</p>
        </h1>
        <p className='text-[clamp(sm,md,xl)] leading-3 tracking-wider text-secondary-500'>
          Awesome Videos
        </p>
      </div>
    </Link>
  );
}
