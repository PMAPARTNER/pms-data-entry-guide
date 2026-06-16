import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PMS Veri Giriş Rehberi | PMAPARTNER',
  description: 'Elektra, Sedna ve Veboni PMS sistemlerinde optimal veri giriş metodolojisi',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
