import Video from './video';

export default async function Index() {
  const res = await fetch('http://localhost:3000/api/video', {
    next: { revalidate: 50 },
    cache: 'no-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const videos = await res.json();
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
      {videos.map((el, idx) => (
        <Video key={idx}></Video>
      ))}
    </div>
  );
}
