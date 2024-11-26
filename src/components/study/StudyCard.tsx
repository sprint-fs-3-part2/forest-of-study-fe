import { useMemo } from 'react';
import dayjs from '@/lib/dayjs';
import cn from '@/lib/cn';
import {
  ImgBgType,
  ColorBgType,
  GetStudyDto,
} from '@/services/study/api/types';

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
  const isImgBg = IMG_BACKGROUNDS.includes(background as ImgBgType);
  const duration = useMemo(() => {
    return dayjs(createdAt).fromNow(true);
  }, [createdAt]);
  const styles = {
    container: cn(
      'h-full grid rounded border-black-10 border p-[30px] gap-y-3 md:gap-y-[30px]',
      { '[&_*]:text-white': isImgBg },
    ),
    nickname: cn(!isImgBg && nicknameClass[background]),
    duration: 'caption-sm tabular-nums',
  };

  return (
    <article className={styles.container}>
      <section>
        <div className='flex justify-between'>
          <h3 className='heading-3'>
            <span className={styles.nickname}>{nickname}</span>
            {` 의 ${name}`}
          </h3>
          <div>포인트 획득</div>
        </div>
        <div>
          <p className={styles.duration}>{duration} 째 진행중</p>
        </div>
      </section>

      <section>
        <p className='lead'>{intro}</p>
      </section>

      <section className='flex gap-[5px] md:pt-6'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </section>
    </article>
  );
}
