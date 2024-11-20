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
      <Link
        href='/'
        aria-label='홈으로 이동'
        prefetch={true}
      >
        <Image
          className={cn('w-[106px] md:w-[181px] xl:w-[181px]')}
          src={Logo}
          width={181}
          height={60}
          alt='로고 이미지'
          priority
          quality={90}
        />
      </Link>
      {pathname === '/' ? (
        <Link
          href='/study/create'
          prefetch={true}
        >
          <CommonBtn
            widthType='dynamic'
            heightType='dynamic'
            aria-label='새로운 스터디 그룹 만들기'
            data-testid='create-study-button'
          >
            스터디 만들기
          </CommonBtn>
        </Link>
      ) : null}
    </nav>
  );
}
