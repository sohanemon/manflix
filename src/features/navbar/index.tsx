import Logo from '@/components/logo';
import Search from '@/features/navbar/search';
import Social from './social';

export default function Navbar() {
  return (
    <div className='w-5/6 mx-auto my-4 flex flex-col md:flex-row  items-center justify-between'>
      <Logo />
      <Search />
      <Social />
      <h1>woo hoo</h1>
    </div>
  );
}
