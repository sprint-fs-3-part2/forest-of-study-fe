'use client';

import { LinkBtn } from '@/components/common/LinkBtn';
import { usePathname, useRouter } from 'next/navigation';
import cn from '@/lib/cn';
import { StudyNavProps } from './StudyNav.types';

const FONT_SIZE = 'text-[24px] md:text-[32px] xl:text-[32px]';

const BUTTON_GAP = 'gap-[6px] md:gap-[16px] xl:gap-[16px]';

export const StudyNav = ({
  nickname,
  studyName,
  setModalVariant,
}: StudyNavProps) => {
  const pathname = usePathname();
  const studyId = pathname.split('/')[2];
  const router = useRouter();

  const HABIT_ROUTER = `/study/${studyId}/habit`;
  const FOCUS_ROUTER = `/study/${studyId}/focus`;
  const DETAIL_ROUTER = `/study/${studyId}`;

  const texts = {
    [FOCUS_ROUTER]: ['오늘의 습관', '홈'],
    [HABIT_ROUTER]: ['오늘의 집중', '홈'],
    [DETAIL_ROUTER]: ['오늘의 습관', '오늘의 집중'],
  };

  const onClickFunctions = {
    [FOCUS_ROUTER]: [
      () => router.push(HABIT_ROUTER),
      () => router.push(DETAIL_ROUTER),
    ],
    [HABIT_ROUTER]: [
      () => router.push(FOCUS_ROUTER),
      () => router.push(DETAIL_ROUTER),
    ],
    [DETAIL_ROUTER]: [
      () => setModalVariant && setModalVariant('habit'),
      () => setModalVariant && setModalVariant('focus'),
    ],
  };

  return (
    <div className='flex justify-between items-center flex-wrap gap-y-4 mb-4'>
      <span
        className={cn('font-extrabold', FONT_SIZE, 'text-black')}
      >{`${nickname}의 ${studyName}`}</span>
      <div className={cn('flex', BUTTON_GAP)}>
        <LinkBtn onClick={onClickFunctions[pathname][0]}>
          {texts[pathname][0]}
        </LinkBtn>
        <LinkBtn onClick={onClickFunctions[pathname][1]}>
          {texts[pathname][1]}
        </LinkBtn>
      </div>
    </div>
  );
};
