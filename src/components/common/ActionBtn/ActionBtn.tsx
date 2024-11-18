import React from 'react';
import Image from 'next/image';
import { ActionBtnProps } from './ActionBtn.types';
import cn from '@/lib/cn';

const BG_COLOR = {
  circle: 'disabled:bg-brand bg-green-text',
  ellipse: 'disabled:bg-gray bg-brand',
};

const WIDTH = {
  circle: 'w-[48px] md:w-[64px] xl:w-[64px]',
  ellipse: 'w-[140px] md:w-[333px] xl:w-[333px]',
};

const HEIGHT = {
  circle: 'h-[48px] md:h-[64px] xl:h-[64px]',
  ellipse: 'h-[45px] md:h-[60px] xl:h-[60px]',
};

const ROUNDED = {
  circle: 'rounded-full',
  ellipse: 'rounded-[30.48px] md:rounded-[50px] xl:rounded-[50px]',
};

const PADDING = {
  ellipse:
    'pl-[20px] md:pl-[78px] xl:pl-[78px] pr-[28px] md:pr-[105px] xl:pr-[105px]',
  circle: 'p-[11px] md:p-[14.5px] xl:p-[14.5px]',
};

export function ActionBtn({
  variant,
  children,
  icon,
  ...rest
}: ActionBtnProps) {
  return (
    <button
      className={cn(
        'w-full',
        'pl-[78px]',
        'pr-[105px]',
        'flex items-center justify-center flex-row',
        BG_COLOR[variant],
        WIDTH[variant],
        HEIGHT[variant],
        ROUNDED[variant],
        PADDING[variant],
      )}
      {...rest}
    >
      <div className={cn('flex flex-row justify-between items-center w-full')}>
        <Image
          className={cn('w-[24px] md:w-[44px] xl:w-[44px]')}
          src={icon}
          alt='아이콘'
        />
        {typeof children === 'string' && (
          <p
            className={cn(
              'text-[18px] md:text-[28px] xl:text-[28px]',
              'text-white',
              'font-extrabold',
            )}
          >
            {children}
          </p>
        )}
      </div>
    </button>
  );
}
