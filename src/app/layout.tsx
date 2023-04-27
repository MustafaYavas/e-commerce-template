import Providers from '@/components/Providers';
import { Akshar } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

export const metadata = {
  title: 'Furny | Design your home',
  description: 'Furny',
};

const akshar = Akshar({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={akshar.className}>
        <Providers children={children} />
      </body>
    </html>
  );
}
