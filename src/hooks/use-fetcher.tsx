import useVideoStore from '@/store/video';
import { useEffect } from 'react';

const useFetcher = () => {
  const videos = useVideoStore((s) => s.videos);
  const fetchVideos = useVideoStore((s) => s.fetchVideos);
  useEffect(() => {
    if (!videos.length) fetchVideos('trending web development technology');
  }, [videos.length, fetchVideos]);
};

export default useFetcher;
