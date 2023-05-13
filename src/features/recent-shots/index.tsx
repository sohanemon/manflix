import { selectVideos } from '@/slices/video';
import { useSelector } from 'react-redux';
import VideoCard from '../../components/video-card';
import ShowMore from './show-more';
import { videoFetcher } from '@/lib/fetcher';

export default async function Index() {
  // const videos = useSelector(selectVideos);
  const videos = await videoFetcher('');
  return (
    <div className='grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-evenly lg:w-3/4'>
      {videos?.map((video) => (
        <VideoCard key={video.id} {...video}></VideoCard>
      ))}
      <ShowMore />
    </div>
  );
}
