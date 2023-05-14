export default function VideoCardSkeletons() {
  return (
    <div className='relative w-full max-w-xs overflow-hidden text-black transition-all rounded-lg bg-neutral-700 group hover:rounded-none [&_p]:animate-pulse'>
      <div className='absolute inset-x-0 bottom-0 p-4 pt-10 space-y-2 font-medium text-white '>
        <p className='w-full h-5 rounded-md bg-neutral-500' />
        <p className='w-2/3 h-5 rounded-md bg-neutral-500' />
        <div className='flex justify-between'>
          <p className='w-20 h-3 rounded-md bg-neutral-500' />
          <p className='w-16 h-3 rounded-md bg-neutral-500' />
        </div>
      </div>
    </div>
  );
}
