'use client';

import { ModalProps } from './Modal.types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from '@/lib/cn';

const WIDTH = 'w-[344px] md:w-[648px] xl:w-[648px]';
const PADDING_X = 'px-[16px] md:px-[24px] xl:px-[24px]';
const PADDING_Y = 'py-[24px] md:py-[40px] xl:py-[40px]';

export function Modal({ isOpen, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className='absolute inset-0 bg-black-50 z-10'>
      <div
        role='dialog'
        aria-modal='true'
        className={cn(
          'absolute top-1/2 left-1/2',
          '-translate-x-1/2 -translate-y-1/2',
          'bg-white rounded-[20px] z-20',
          PADDING_X,
          PADDING_Y,
          WIDTH,
        )}
      >
        <div
          className={cn('w-full', 'flex flex-col items-center justify-center')}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
