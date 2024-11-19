import { IconTagProps } from './IconTag.types';
import Image from 'next/image';
import cn from '@/lib/cn';

const FONT_SIZE = {
  page: 'text-[16px]',
  card: 'text-[12px]',
};

const PADDING = {
  page: {
    point: 'py-[4px] px-[12px]',
    reaction: 'py-[4px] px-[8px]',
  },
  card: {
    point: 'py-[6px] px-[12px]',
    reaction: 'py-[6px] px-[8px]',
  },
};

const OPACITY = {
  white: 'text-black bg-white/30',
  black: {
    card: {
      color: 'text-white bg-black-50',
      image: 'text-white bg-black-40',
    },
    page: 'text-white bg-black-50',
  },
};

const BORDER = {
  point: 'border border-black-10',
  reaction: {
    white: 'border border-black-10',
    black: '',
  },
};

export function IconTag({
  variant,
  fillColor,
  parentComponent,
  backgroundType,
  text,
  icon,
  className,
}: IconTagProps) {
  return (
    <div
      className={cn(
        'rounded-[50px]',
        'flex justify-between items-center',
        'w-fit gap-[5px]',
        'font-normal',
        className,
        FONT_SIZE[parentComponent],
        PADDING[parentComponent][variant],
        variant === 'point' && BORDER[variant],
        variant === 'reaction' && BORDER[variant][fillColor],
        fillColor === 'white' && OPACITY[fillColor],
        backgroundType && fillColor === 'black' && parentComponent === 'card'
          ? OPACITY[fillColor][parentComponent][backgroundType]
          : fillColor === 'black' &&
              parentComponent === 'page' &&
              OPACITY[fillColor][parentComponent],
      )}
    >
      {typeof icon === 'string' ? (
        <p className={FONT_SIZE[parentComponent]}>{icon}</p>
      ) : (
        <Image
          width={parentComponent === 'page' ? 16 : 12}
          src={icon}
          alt='포인트 아이콘'
        />
      )}
      <p className={FONT_SIZE[parentComponent]}>{text}</p>
    </div>
  );
}
