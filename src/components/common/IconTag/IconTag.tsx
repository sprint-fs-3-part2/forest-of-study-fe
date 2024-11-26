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
      default: 'text-white bg-black-50',
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
  onClick,
}: IconTagProps) {
  if (parentComponent === 'card' && fillColor === 'black' && !backgroundType) {
    throw new Error(
      'backgroundType은 parentComponent가 card이고 fillColor가 black일 때 필수입니다.',
    );
  }

  const getStyleClasses = () => {
    const baseClasses = [
      'rounded-[50px]',
      'flex justify-between items-center',
      'w-fit gap-[5px]',
      'font-normal',
      FONT_SIZE[parentComponent],
      PADDING[parentComponent][variant],
    ];
    if (variant === 'point') {
      baseClasses.push(BORDER[variant]);
    }

    if (variant === 'reaction') {
      baseClasses.push(BORDER[variant][fillColor]);
    }

    if (fillColor === 'white') {
      baseClasses.push(OPACITY[fillColor]);
    }

    if (fillColor === 'black') {
      if (parentComponent === 'card' && backgroundType) {
        baseClasses.push(OPACITY[fillColor][parentComponent][backgroundType]);
      } else if (parentComponent === 'page') {
        baseClasses.push(OPACITY[fillColor][parentComponent]);
      }
    }
    className && baseClasses.push(className);

    return baseClasses;
  };

  return (
    <div
      onClick={onClick}
      className={cn(getStyleClasses())}
      role='note'
      aria-label={`${text}${typeof icon === 'string' ? ` ${icon}` : ''} 태그`}
    >
      {typeof icon === 'string' ? (
        <p className={FONT_SIZE[parentComponent]}>{icon}</p>
      ) : (
        <Image
          width={parentComponent === 'page' ? 16 : 12}
          src={icon}
          alt={`${text}관련 아이콘`}
        />
      )}
      <p className={FONT_SIZE[parentComponent]}>{text}</p>
    </div>
  );
}
