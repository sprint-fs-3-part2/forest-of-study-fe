import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} ${jejudoldam.variable} antialiased`}>{children}</body>
    </html>
  );
}
