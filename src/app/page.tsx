import Hero from '@/features/hero';
import Navbar from '@/features/navbar';
import RecentShots from '@/features/recent-shots';
import { Inter } from 'next/font/google';
import ShowingResult from './showing-result';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className + ' select-none'}>
      <Navbar />
      <Hero />
      <br />
      <ShowingResult />
      <RecentShots />
    </main>
  );
}
