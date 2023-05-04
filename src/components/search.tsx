'use client';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';

export default function Search() {
  return (
    <div className='flex items-center px-5 border border-gray-600 focus-within:border-primary rounded-full group'>
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
      <Listbox.Button>{selectedTag || 'Category'}</Listbox.Button>

      <Listbox.Options>
        {tags.map((tag) => (
          <Listbox.Option key={tag.id} value={tag.name}>
            {tag.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
