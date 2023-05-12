import Video from './video';

export default async function Index() {
  const res = await fetch('http://localhost:3000/api/v2/video', {
    next: { revalidate: 50 },
    cache: 'no-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const videos: Video[] = await res.json();
  return (
    <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-evenly lg:w-3/4'>
      {videos.map((video) => (
        <Video key={video.id} {...video}></Video>
      ))}
    </div>
  );
}
