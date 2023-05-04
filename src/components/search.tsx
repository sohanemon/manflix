'use client';
import * as Select from '@radix-ui/react-select';
import { BsChevronCompactDown, BsSearch } from 'react-icons/bs';

export default function Search() {
  return (
    <div className='flex items-center px-5 border border-gray-600 focus-within:border-primary rounded-full group'>
      <div>
        <Select.Root>
          <Select.Trigger
            aria-label='Category'
            className='flex items-center gap-1 border-r border-gray-600 pr-2 group-focus-within:border-primary'
          >
            <Select.Value placeholder='Category' />
            <Select.Icon>
              <BsChevronCompactDown />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.ScrollUpButton>up</Select.ScrollUpButton>
              <Select.Viewport>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <p>Apple</p>
                  <p>Banana</p>
                  <p>Blueberry</p>
                  <p>Grapes</p>
                  <p>Pineapple</p>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton>down</Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
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
