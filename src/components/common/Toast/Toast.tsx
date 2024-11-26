import cn from '@/lib/cn';
import { ToastProps } from './Toast.types';

const BG_COLOR = {
  point: 'bg-green text-green-text',
  warning: 'bg-pink text-red',
};

const FONT = 'text-[14px] md:text-[16px] xl:text-[16px] font-medium';

const PADDING = 'px-[28px] py-[12px]';

export function Toast({ variant, children, className }: ToastProps) {
  return (
    <div
      className={cn(
        BG_COLOR[variant],
        FONT,
        'rounded-xl',
        'flex items-center justify-center',
        'whitespace-nowrap',
        PADDING,
        'w-fit',
        className,
      )}
    >
      {children}
    </div>
  );
}
