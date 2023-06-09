export default function VideoCardSkeletons() {
  return (
    <div className='relative w-full h-full max-w-xs overflow-hidden text-black transition-all rounded-lg bg-neutral-700 group [&_p]:animate-pulse aspect-video duration-75'>
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
