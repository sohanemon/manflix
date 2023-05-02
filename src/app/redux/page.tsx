'use client';

import { decrement, increment, selectValue } from '@/slices/counter-slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Redux() {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}
