'use client';

import Image from 'next/image';
import Link from 'next/link';
import rightArrowIcon from '@/public/icons/ic_arrow_right.svg';
import { useState } from 'react';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className='flex flex-row justify-between items-center mb-4'>
      <h1 className='text-[32px] font-bold'>{title}</h1>
      <div className='flex gap-4'>
        <Link href={'/habit'}>
          <Button>오늘의 습관</Button>
        </Link>

        <Link href={'/'}>
          <Button>홈</Button>
        </Link>
      </div>
    </div>
  );
};

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='border border-gray-light rounded-2xl py-3 pl-6 pr-4 flex'>
      {children}
      {rightArrowIcon && (
        <Image
          src={rightArrowIcon}
          width={24}
          height={24}
          alt='페이지 이동 아이콘'
        />
      )}
    </button>
  );
};

export const Point = () => {
  return (
    <div className='mb-6'>
      <p className='text-gray'>현재까지 획득한 포인트</p>
      {/* <IconTag  /> */}
      <p>IconTag 공통 컴포넌트 필요</p>
    </div>
  );
};

export const Timer = () => {
  // TODO: 현우님과 상의 필요
  const [time, setTime] = useState('25:00');

  return (
    <div className='border border-gray-light rounded-[20px] flex flex-col justify-around items-center h-[546px]'>
      <h2 className='font-extrabold text-2xl'>오늘의 집중</h2>
      <span className='font-extrabold text-[150px]'>{time}</span>
      start! 공통 컴포넌트 필요
    </div>
  );
};
