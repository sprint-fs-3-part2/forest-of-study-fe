'use client';

import { LinkBtn } from '@/components/common/LinkBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from '@/lib/cn';
import { StudyNavProps } from './StudyNav.types';

const FONT_SIZE = 'text-[24px] md:text-[32px] xl:text-[32px]';

const BUTTON_GAP = 'gap-[6px] md:gap-[16px] xl:gap-[16px]';

export const StudyNav = ({ nickname, studyName }: StudyNavProps) => {
  const pathname = usePathname();
  const studyId = pathname.split('/')[2];

  const getNavLinks = () => {
    const paths = {
      [`/study/${studyId}/focus`]: [
        { text: '오늘의 습관', href: `/study/${studyId}/habit` },
        { text: '홈', href: `/study/${studyId}` },
      ],
      [`/study/${studyId}/habit`]: [
        { text: '오늘의 집중', href: `/study/${studyId}/focus` },
        { text: '홈', href: `/study/${studyId}` },
      ],
      [`/study/${studyId}`]: [
        { text: '오늘의 습관', href: `/study/${studyId}/habit` },
        { text: '오늘의 집중', href: `/study/${studyId}/focus` },
      ],
    };

    return paths[pathname] || paths[`/study/${studyId}`];
  };

  return (
    <div className='flex justify-between items-center flex-wrap'>
      <span
        className={cn('font-extrabold', FONT_SIZE, 'text-black')}
      >{`${nickname}의 ${studyName}`}</span>
      <div className={cn('flex', BUTTON_GAP)}>
        {getNavLinks().map(({ text, href }) => (
          <Link
            key={href}
            href={href}
          >
            <LinkBtn>{text}</LinkBtn>
          </Link>
        ))}
      </div>
    </div>
  );
};
