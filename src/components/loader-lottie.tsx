'use client';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function LoaderLottie() {
  return (
    <>
      <Player
        autoplay
        loop
        className='sticky inset-0 w-48 my-auto aspect-square'
        src={require('../assets/lottie/samurai.json')}
      ></Player>
    </>
  );
}
