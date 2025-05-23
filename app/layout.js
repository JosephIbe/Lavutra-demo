import "./globals.css";

export const metadata = {
  title: 'LAVUTRA | African Celebrations Reimagined',
  description: 'Digital platform fusing African traditions with modern technology',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'icon',
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
};

import { neueHaas, gtAmerica } from './utils/font'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={`${neueHaas.variable} ${gtAmerica.variable}`}
    >
      <body
        className="bg-black text-white">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </MotionConfig>  
      </body>
    </html>
  );
}
