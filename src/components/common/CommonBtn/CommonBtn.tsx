import { CommonBtnProps } from './CommonBtn.types';
import cn from '@/lib/cn';

const VARIANTS = {
  confirm: {
    background: 'bg-[#99C08E]',
    shadow: '0 -3px 0 #578246',
  },
  cancel: {
    background: 'bg-[#DDDDDD]',
    shadow: '0 -3px 0 #999999',
  },
} as const;

export function CommonBtn({
  variant = 'confirm',
  widthType,
  heightType,
  className,
  type = 'button',
  children,
  disabled = false,
}: CommonBtnProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        className,
        'font-jejudoldam rounded-2xl text-[18px] text-white',
        'cursor-pointer',
        {
          'w-full': widthType === 'full',
          'w-[calc(50%-8px)] md:w-[calc(50%-12px)] xl:w-[calc(50%-12px)]':
            widthType === 'half',
          'w-[106px] md:w-[160px] xl:w-[252px]': widthType === 'dynamic',
        },
        {
          'h-[52px]': heightType === 'fixed',
          'h-[38px] md:h-[58px] xl:h-[58px]': heightType === 'dynamic',
        },
        VARIANTS[variant].background,
      )}
      style={{
        textShadow: VARIANTS[variant].shadow,
      }}
    >
      {children}
    </button>
  );
}