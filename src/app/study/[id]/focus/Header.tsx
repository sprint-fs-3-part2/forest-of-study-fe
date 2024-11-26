/* eslint-disable no-undef */
'use client';

import Link from 'next/link';

/* 아이콘 */
import { LinkBtn } from '@/components/common/LinkBtn';

const Header = () => {
  const title = '연우의 개발공장';
  return (
    <div className='flex flex-row justify-between items-center mb-4 flex-wrap gap-4'>
      <h1 className='text-[32px] font-bold max-sm:text-2xl'>{title}</h1>
      <div className='flex gap-4'>
        <Link href={'/habit'}>
          <LinkBtn>오늘의 습관</LinkBtn>
        </Link>

        <Link href={'/'}>
          <LinkBtn>홈</LinkBtn>
        </Link>
      </div>
    </div>
  );
};

export { Header };
