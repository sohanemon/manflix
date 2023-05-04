'use client';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  return (
    <div className='flex items-center px-5 border border-gray-600 focus-within:border-primary rounded-full group'>
      <Input />
    </div>
  );
}

const Input = () => {
  return (
    <>
      <div className='relative pl-2'>
        <label htmlFor='UserEmail' className='sr-only'>
          Email
        </label>

        <input
          type='email'
          id='UserEmail'
          placeholder='grow your beard'
          className='w-full rounded-md  border-none outline-none py-2.5 shadow-sm sm:text-sm bg-transparent pe-10 placeholder:text-gray-600 '
        />
      </div>
      <BsSearch />
    </>
  );
};
