import './globals.css';
import { Outfit } from 'next/font/google';
import { HeroThemeProvider } from './provider/HeroThemeProvider';
import ToastProvider from './provider/ToastProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Pixgen Ai',
  description: 'Your one-stop destination for the latest photos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${outfitFont.className} min-h-screen flex flex-col bg-background text-foreground`}
      >
        <HeroThemeProvider>
          <Navbar />
          <main className='container mx-auto flex-1 px-4'>{children}</main>
          <ToastProvider />
          <Footer />
        </HeroThemeProvider>
      </body>
    </html>
  );
}
