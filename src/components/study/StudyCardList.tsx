import { GetStudyDto } from '@/services/study/api/types';
import Link from 'next/link';
import StudyCard from './StudyCard';
import cn from '@/lib/cn';
import Store from '@/utils/store';

type BackgroundType =
  | 'blue'
  | 'pink'
  | 'green'
  | 'yellow'
  | 'wall'
  | 'desk'
  | 'laptop'
  | 'plant';

const bgClass: Record<BackgroundType, string> = {
  blue: 'bg-blue',
  pink: 'bg-pink',
  green: 'bg-green',
  yellow: 'bg-yellow',
  wall: 'bg-study-wall [&>*]:bg-black-50',
  desk: 'bg-study-desk [&>*]:bg-black-50',
  laptop: 'bg-study-laptop [&>*]:bg-black-50 ',
  plant: 'bg-study-plant [&>*]:bg-black-50 ',
};

export default function StudyCardList({
  studies,
}: Readonly<{ studies: GetStudyDto[] }>) {
  const onClick = (studyId: string) => {
    const recentStudy = Store.getItem('recentStudy') ?? [];
    const newRecentStudy = Array.from(new Set([studyId, ...recentStudy]));
    Store.setItem('recentStudy', newRecentStudy);
  };

  return (
    <div className='md:grid-cols-2 xl:grid-cols-3 place-content-center container grid grid-cols-1 gap-6 mx-auto'>
      {studies.length > 0 &&
        studies.map((study) => (
          <Link
            key={study.id}
            href={`/study/${study.id}`}
            onClick={() => onClick(study.id)}
            className={cn(
              'w-full h-full bg-cover rounded bg-no-repeat bg-center min-h-[180px]',
              bgClass[study.background],
            )}
          >
            <StudyCard {...study} />
          </Link>
        ))}
      {studies?.length === 0 && (
        <p className='caption-base'>아직 둘러 볼 스터디가 없어요</p>
      )}
    </div>
  );
}
