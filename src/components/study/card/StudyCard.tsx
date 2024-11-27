'use client';

import { useMemo } from 'react';

import cn from '@/lib/cn';
import dayjs from '@/lib/dayjs';
import {
  ImgBgType,
  ColorBgType,
  GetStudyDto,
} from '@/services/study/api/types';
import { IconTag } from '@/components/common/IconTag';
import PointIcon from '@/public/icons/point_icon.png';
import Store from '@/utils/store';

const REACTION_EMOJI = ['💡', '👍', '✨', '🔥', '💪', '🎯', '👏', '🌟', '💯'];
interface ReactionData {
  emoji: string;
  count: number;
}

export const generateRandomReactions = (): ReactionData[] => {
  const length = Math.floor(Math.random() * 4);
  const shuffledEmojis = [...REACTION_EMOJI]
    .sort(() => Math.random() - 0.5)
    .slice(0, length);
  return shuffledEmojis.map((emoji) => ({
    emoji,
    count: Math.floor(Math.random() * 500) + 1,
  }));
};

const IMG_BACKGROUNDS: ImgBgType[] = ['wall', 'desk', 'laptop', 'plant'];

const nicknameClass: Record<ColorBgType, string> = {
  green: 'text-green-text',
  yellow: 'text-yellow-text',
  blue: 'text-blue-text',
  pink: 'text-pink-text',
};

export default function StudyCard({
  name,
  nickname,
  intro,
  background,
  createdAt,
  points,
  id,
}: Readonly<GetStudyDto>) {
  const reactions = useMemo(generateRandomReactions, []);
  const isImgBg = IMG_BACKGROUNDS.includes(background as ImgBgType);
  const duration = useMemo(() => {
    return dayjs(createdAt).fromNow(true);
  }, [createdAt]);
  const CLASSES = {
    container: cn(
      'h-full grid rounded border-black-10 border p-[30px] gap-y-3 md:gap-y-[30px]',
      { '[&_*]:text-white bg-black-50': isImgBg },
    ),
    nickname: cn(!isImgBg && nicknameClass[background as ColorBgType]),
    duration: 'caption-sm tabular-nums',
  } as const;

  const onClick = (studyId: string) => {
    const recentStudy = Store.getItem('recentStudy') ?? [];
    const newRecentStudy = Array.from(new Set([studyId, ...recentStudy]));
    Store.setItem('recentStudy', newRecentStudy);
  };

  return (
    <article
      onClick={() => onClick(id)}
      className={CLASSES.container}
    >
      <section>
        <div className='flex justify-between max-w-full'>
          <h3 className='heading-3 line-clamp-1 text-ellipsis '>
            <span className={CLASSES.nickname}>{nickname}</span>
            {` 의 ${name}`}
          </h3>
          <div className='flex-0'>
            <IconTag
              className='whitespace-nowrap'
              variant='point'
              parentComponent='card'
              fillColor={isImgBg ? 'black' : 'white'}
              backgroundType={isImgBg ? 'image' : 'color'}
              icon={PointIcon}
              text={`${points}P 획득`}
            />
          </div>
        </div>
        <div>
          <p className={CLASSES.duration}>{duration}째 진행중</p>
        </div>
      </section>

      <section>
        <p className='lead line-clamp-2 text-ellipsis'>{intro}</p>
      </section>

      <section className='flex gap-[5px] md:pt-6 items-center'>
        {reactions.map((reaction) => (
          <IconTag
            key={reaction.emoji}
            variant='reaction'
            parentComponent='card'
            fillColor='black'
            icon={reaction.emoji}
            text={reaction.count.toString()}
            backgroundType={isImgBg ? 'image' : 'color'}
          />
        ))}
      </section>
    </article>
  );
}
