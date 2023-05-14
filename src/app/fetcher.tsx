'use client';

import { fetchVideosThunk } from '@/slices/video';
import { AppDispatch } from '@/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Fetcher() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchVideosThunk('trending web development technology'));
  }, [dispatch]);
  return null;
}
