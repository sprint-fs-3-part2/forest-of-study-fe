/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';

import { GNB } from '@/components/layout';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard-variable',
  weight: '100 900',
});

const jejudoldam = localFont({
  src: './fonts/EF_jejudoldam.ttf',
  display: 'swap',
  variable: '--font-jejudoldam',
});

export const metadata: Metadata = {
  title: '공부의 숲',
  description: '공부의 숲에 오신걸 환영합니다.',
  icons: {
    icon: '/icon.ico',
    sizes: '16x16',
    type: 'image/x-icon',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} ${jejudoldam.variable} antialiased min-h-screen min-h-dvh`}
      >
        <GNB />
        {children}
      </body>
    </html>
  );
}
