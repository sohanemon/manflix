import ReduxProvider from '@/context/redux-provider';
import './globals.css';
import { Inter } from 'next/font/google';
import store from '@/store';
import { fetchVideosThunk } from '@/slices/video';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manflix 🚧',
  description: 'Manflix | Stream youtube videos | Elegantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(
    ' lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.'
  );
  store.dispatch(fetchVideosThunk('alhamdulillah'));
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
