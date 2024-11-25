import cn from '@/lib/cn';
import { BackgroundType, GetStudyDto } from '@/services/study/api/types';

type BgColor = 'green' | 'yellow' | 'blue' | 'pink';

const nicknameClass: Record<BgColor, string> = {
  green: 'text-green-text',
  yellow: 'text-yellow-text',
  blue: 'text-blue-text',
  pink: 'text-pink-text',
};

export default function StudyCard(study: Readonly<GetStudyDto>) {
  const { name, nickname, intro, background } = study;
  const isImgBg = ['wall', 'desk', 'laptop', 'plant'].includes(background);
  return (
    <article
      className={cn(
        'grid rounded border-black-10 border p-[30px] gap-y-3 md:gap-y-[30px] aspect-card-sm md:aspect-card-md xl:aspect-card',
        { '[&_*]:text-white': isImgBg },
      )}
    >
      <section>
        <div className='flex justify-between'>
          <h3 className='heading-3'>
            <span
              className={cn(
                !isImgBg &&
                  nicknameClass[background as Extract<BackgroundType, BgColor>],
              )}
            >
              {nickname}
            </span>
            {` 의 ${name}`}
          </h3>
          <div>포인트 획득</div>
        </div>
        <div>
          <p className='caption-sm tabular-nums'>-일째 진행중</p>
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
