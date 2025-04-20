import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SwimFinder - 수영장 찾기 서비스',
  description: '서울/경기도 내의 공공 및 사설 수영장을 위치 기반으로 탐색하는 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
} 