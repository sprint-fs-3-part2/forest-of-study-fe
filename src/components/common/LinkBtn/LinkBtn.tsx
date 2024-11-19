import Image from 'next/image';
import ArrowRightIcon from '@/public/icons/ic_arrow_right.png';
import { ComponentPropsWithoutRef } from 'react';

export function LinkBtn({
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className='flex justify-center items-center py-[12px] pl-[24px] pr-[16px] border border-gray-light rounded-[15px] text-gray gap-[4px]'
      {...props}
    >
      <p>{children}</p>
      <Image
        src={ArrowRightIcon}
        alt='오른쪽 화살표 이미지'
        width={24}
        height={24}
      ></Image>
    </button>
  );
}
