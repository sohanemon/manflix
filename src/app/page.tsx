import Hero from '@/features/hero';
import Navbar from '@/features/navbar';
import RecentShots from '@/features/recent-shots';
import { addToDB } from '@/lib/db';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <RecentShots />
    </main>
  );
}
