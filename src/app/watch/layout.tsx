import Navbar from '@/features/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
