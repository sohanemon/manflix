import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className='w-max'>
      <h1 className='flex items-center font-bold text-3xl justify-between'>
        <p>MAN </p> <p className='text-primary-500'>FLIX</p>
      </h1>
      <p className='tracking-wider text-secondary-500 leading-3'>
        Awesome Videos
      </p>
    </Link>
  );
}
