'use client';

import Image from 'next/image';
import Logo from '@/public/image/img_logo.svg';
import { CommonBtn } from '@/components/common/CommonBtn';
import cn from '@/lib/cn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function GNB() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'w-full',
        'flex justify-between',
        'px-[16px] md:px-[24px] xl:px-[220px]',
        'py-[31px] md:py-[21px] xl:py-[21px]',
      )}
    >
      <Link href='/'>
        <Image
          className={cn('w-[106px] md:w-[181px] xl:w-[181px]')}
          src={Logo}
          alt='공부의 숲 로고 이미지'
        />
      </Link>
      {pathname === '/' ? (
        <CommonBtn
          widthType='dynamic'
          heightType='dynamic'
        >
          스터디 만들기
        </CommonBtn>
      ) : null}
    </nav>
  );
}
