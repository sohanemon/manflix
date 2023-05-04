import Link from 'next/link';

export default function Page() {
  return (
    <main className=' mx-auto pt-10 px-10'>
      <div className='w-full max-w-xl mx-auto'>
        <form className='bg-transparent/50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {/* place where Input will go */}
          <Input label='title' />
          <Input label='link' placeholder='youtube.com/watch?v=yi3NZn9HSx' />
          <Input label='author' />
          <Input
            label='description'
            placeholder='write a short description . . .'
          />
          <div className='flex gap-3'>
            <Input label='likes' placeholder='123' />
            <Input label='dislikes' placeholder='123' />
            <Input label='views' placeholder='123' />
          </div>
          <Input label='tags' placeholder='separate with comma' />
          <div className='flex gap-2 items-center mb-3'>
            <input
              type='checkbox'
              defaultChecked={false}
              id='checkbox'
              className='accent-primary-500 h-4 w-4'
            />
            <label
              className='block text-secondary-500 text-sm font-bold select-none capitalize'
              htmlFor='checkbox'
            >
              Ready to go?
            </label>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Submit
            </button>
            <Link
              className='inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-800'
              href='/'
            >
              Learn more
            </Link>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs'>
          ©2023{' '}
          <Link href={'https://github.com/sohanemon'} target='_blank'>
            SohanEmon
          </Link>
          . All rights reserved.
        </p>
      </div>
    </main>
  );
}

const Input = ({ label, placeholder }: Input) => {
  return (
    <>
      <div className='mb-4'>
        <label
          className='block text-secondary-500 text-sm font-bold mb-2 capitalize'
          htmlFor={label}
        >
          {label}
        </label>
        {label === 'description' ? (
          <textarea
            rows={5}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder:capitalize placeholder:text-gray-400 placeholder:font-light'
            id={label}
            placeholder={placeholder || label}
          />
        ) : (
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder:capitalize placeholder:text-gray-400 placeholder:font-light'
            id={label}
            type='text'
            placeholder={placeholder || label}
          />
        )}
      </div>
    </>
  );
};
