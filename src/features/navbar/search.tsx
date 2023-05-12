'use client';
import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function Search() {
  return (
    <div className='flex items-center relative px-5 border border-gray-600 focus-within:border-primary-500 rounded-full group mt-10 md:mt-0'>
      <CategorySelect />
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

const tags = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const CategorySelect = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <Listbox value={selectedTag} onChange={setSelectedTag}>
      <Listbox.Button className={'flex items-center gap-1'}>
        {selectedTag || 'Category'} <HiOutlineChevronDown />
      </Listbox.Button>

      <Listbox.Options className='absolute top-full space-y-1  divide-y-[1pt] divide-gray-600 border-primary-500 border-t-black border p-4'>
        {tags.map((tag) => (
          <Listbox.Option
            className={'cursor-pointer'}
            key={tag.id}
            value={tag.name}
          >
            {tag.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
