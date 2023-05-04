import Logo from '@/components/logo';
import Search from '@/components/search';

export default function Navbar() {
  return (
    <div className='w-5/6 mx-auto my-4 flex items-center justify-between'>
      <Logo />
      <Search />
      <h1>woo hoo</h1>
    </div>
  );
}
