'use client';

export default function ShowMore() {
  return (
    <>
      <div
        onClick={() => {
          window.alert('Why are you so greedy?');
        }}
        className='grid w-full h-full text-xl font-semibold tracking-wider transition-all cursor-pointer place-content-center active:scale-95'
      >
        Show more
      </div>
    </>
  );
}
