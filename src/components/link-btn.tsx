import Link from 'next/link';

export default function LinkBtn({ children, className }: Props) {
  return (
    <div
      className={`flex justify-center max-w-md mx-auto space-y-6 ${className}`}
    >
      <Link
        target='_blank'
        href='/submit'
        className='relative z-10 inline-flex items-center justify-center h-10 px-5 overflow-hidden text-base font-medium tracking-wide text-white transition-all duration-300 ease-in-out border-2 border-solid rounded-full cursor-pointer select-none bg-primary-500 border-primary-500 group outline-0 hover:text-primary-500 focus:text-primary-500'
      >
        <strong className='font-medium'>{children}</strong>

        <span className='absolute bg-neutral-800 bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]' />
      </Link>
    </div>
  );
}
