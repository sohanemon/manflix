import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
export default function ActualNav() {
  return (
    <nav className='bg-black flex items-center justify-between p-5'>
      <RxHamburgerMenu className='text-2xl' />
      <div className='flex items-center'>
        <CgProfile className='text-2xl' /> &nbsp;<p>Welcome!</p>
        <Link href={'/login'} className='text-primary'>
          &nbsp; Login
        </Link>
      </div>
    </nav>
  );
}
