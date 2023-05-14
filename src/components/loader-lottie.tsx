import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function LoaderLottie() {
  return (
    <>
      <Player
        autoplay
        loop
        src={require('../assets/lottie/samurai.json')}
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </>
  );
}
