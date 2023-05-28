import { videoFetcher } from '@/lib/fetcher';
import { create } from 'zustand';

interface VideoStateProps {
  searchParams: string;
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  searchTriggered: boolean;
  fetchVideos: (searchParam: string) => Promise<void>;
  triggerSearch: () => void;
  updateSearchParam: (payload: string) => void;
}

const useVideoStore = create<VideoStateProps>((set)=>({
  searchParams: '',
    videos: [],
    isLoading: true,
    isError: false,
    searchTriggered: false,
fetchVideos: async (searchParam: string) => {
      set({ isLoading: true, isError: false, searchTriggered: false });
      try {
        const videos = await videoFetcher(searchParam);
        set({
          videos,
          isLoading: false,
          isError: false,
          searchTriggered: true,
        });
      } catch (error) {
        set({
          videos: [],
          isLoading: false,
          isError: true,
          searchTriggered: false,
        });
      }
    },
    triggerSearch: () => {
      set({ searchTriggered: false });
    },
    updateSearchParam: (payload: string) => {
      set({ searchParams: payload });
    }

})


export default useVideoStore;
