import React from 'react';
import Image from 'next/image';
import { ActionBtnProps } from './ActionBtn.types';
import cn from '../../../lib/cn';
import playIcon from '@/public/icons/play_icon.png';
import pauseIcon from '@/public/icons/pause_icon.png';

const VARIANTS = {
  //버튼 start버튼을 누르기 전 상태. 동작하지 않은 상태
  active: {
    background: 'bg-[#99C08E]',
  },
  //버튼 start버튼을 누른상태. 타이머 실행중인 상태
  inactive: {
    background: 'bg-[#818181]',
  },
} as const;

export function ActionBtn({
  variant = 'ellipse',
  children,
  icon,
}: ActionBtnProps) {
  return (
    <button
      className={cn(
        'w-full',
        'pl-[78px]',
        'pr-[105px]',
        'flex items-center justify-center flex-row',
        'w-[140px] md:w-[333px] xl:w-[333px]',
        'h-[45px] md:h-[60px] xl:h-[60px]',
        'rounded-[30.48px] md:rounded-[50px] xl:rounded-[50px]',
        'bg-brand',
      )}
    >
      <div
        className={cn(
          'flex flex-row justify-between',
          'items-center',
          'w-full',
        )}
      >
        <Image
          className={cn('w-[16.71px] md:w-[30.64px] xl:w-[30.64px]')}
          src={icon}
          alt='플레이 버튼'
        />
        <p
          className={cn(
            'text-[18px] md:text-[28px] xl:text-[28px]',
            'text-white',
            'font-extrabold',
          )}
        >
          {children}
        </p>
      </div>
    </button>
  );
}
