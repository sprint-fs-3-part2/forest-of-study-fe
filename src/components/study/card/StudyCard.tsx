import { useMemo } from 'react';

import cn from '@/lib/cn';
import dayjs from '@/lib/dayjs';
import {
  ImgBgType,
  ColorBgType,
  GetStudyDto,
} from '@/services/study/api/types';
import { IconTag } from '@/components/common/IconTag';

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

  return (
    <article className={CLASSES.container}>
      <section>
        <div className='flex justify-between'>
          <h3 className='heading-3'>
            <span className={CLASSES.nickname}>{nickname}</span>
            {` 의 ${name}`}
          </h3>
          <div>포인트 획득</div>
        </div>
        <div>
          <p className={CLASSES.duration}>{duration} 째 진행중</p>
        </div>
      </section>

      <section>
        <p className='lead'>{intro}</p>
      </section>

      <section className='flex gap-[5px] md:pt-6'>
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
