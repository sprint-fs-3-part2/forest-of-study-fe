import Image from 'next/image';
import ArrowRightIcon from '@/public/icons/ic_arrow_right.png';
import { LinkBtnProps } from './LinkBtn.types';
import cn from '@/lib/cn';

const PADDING_LEFT = 'pl-[10px] md:pl-[24px] xl:pl-[24px]';
const PADDING_RIGHT = 'pr-[6px] md:pr-[16px] xl:pr-[16px]';
const PADDING_Y = ' py-[8px] md:py-[12px] xl:py-[12px]';

export function LinkBtn({ children, className, ...props }: LinkBtnProps) {
  const ICON_SIZE = 24;

  return (
    <button
      className={cn(
        'flex justify-center items-center',
        'border border-gray-light rounded-[15px] text-gray gap-[4px]',
        PADDING_LEFT,
        PADDING_RIGHT,
        PADDING_Y,
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
