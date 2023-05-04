export default function Page() {
  return (
    <main className=' mx-auto pt-10 px-10'>
      <div className='w-full max-w-xl '>
        <form className='bg-transparent/50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {/* place where Input will go */}
          <Input label='title' />
          <Input label='author' />
          <div className='flex items-center justify-between'>
            <button
              className='bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Submit
            </button>
            <a
              className='inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-800'
              href='#'
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs'>
          ©2020 Acme Corp. All rights reserved.
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
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder:capitalize placeholder:text-gray-400 placeholder:font-light'
          id={label}
          type='text'
          placeholder={placeholder || label}
        />
      </div>
    </>
  );
};
