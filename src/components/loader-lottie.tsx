'use client';
import { Player } from '@lottiefiles/react-lottie-player';

interface Props {
  className: string;
}

export default function LoaderLottie({ className }: Props) {
  return (
    <>
      <Player
        autoplay
        loop
        className={`sticky inset-0 ${className} my-auto aspect-square`}
        src={require('../assets/lottie/samurai.json')}
      ></Player>
    </>
  );
}
