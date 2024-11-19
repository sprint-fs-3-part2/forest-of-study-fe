import Image from 'next/image';
import ArrowRightIcon from '@/public/icons/ic_arrow_right.png';
import { LinkBtnProps } from './LinkBtn.types';
import cn from '@/lib/cn';

export function LinkBtn({ children, className, ...props }: LinkBtnProps) {
  const ICON_SIZE = 24;

  return (
    <button
      className={cn(
        'flex justify-center items-center py-[12px] pl-[24px] pr-[16px] border border-gray-light rounded-[15px] text-gray gap-[4px]',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <Image
        src={ArrowRightIcon}
        alt='오른쪽 화살표 이미지'
        width={ICON_SIZE}
        height={ICON_SIZE}
      ></Image>
    </button>
  );
}
