import VideoCard from '../../components/video-card';
import ShowMore from './show-more';

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
        <VideoCard key={video.id} {...video}></VideoCard>
      ))}
      <ShowMore />
    </div>
  );
}
