import { CommonBtnProps } from './CommonBtn.types';
import cn from '@/lib/cn';

const VARIANTS = {
  submit: {
    background: 'bg-[#99C08E]',
    shadow: '0 -3px 0 #578246',
  },
  cancel: {
    background: 'bg-[#DDDDDD]',
    shadow: '0 -3px 0 #999999',
  },
} as const;

export function CommonBtn({
  variant = 'submit',
  width,
  height,
  className,
  onClick,
  type = 'button',
  ...props
}: CommonBtnProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        'font-jejudoldam rounded-2xl text-[18px] text-white',
        'cursor-pointer',
        {
          'w-full': width === 'full',
          'w-[calc(50%-8px)]': width === 'half',
          'w-[106px] md:w-[160px] xl:w-[252px]': width === 'dynamic',
        },
        {
          'h-[52px]': height === 'fixed',
          'h-[38px] md:h-[58px] xl:h-[58px]': height === 'dynamic',
        },
        VARIANTS[variant].background,
        className,
      )}
      style={{
        textShadow: VARIANTS[variant].shadow,
      }}
      {...props}
    />
  );
}
