import Link from 'next/link';

import cn from '@/lib/cn';
import type { GetStudyDto, BgType } from '@/services/study/api/types';
import { fetchStudies } from '@/services/study/studyService';

import StudyCard from './StudyCard';

const bgClass: Record<BgType, string> = {
  blue: 'bg-blue',
  pink: 'bg-pink',
  green: 'bg-green',
  yellow: 'bg-yellow',
  wall: 'bg-study-wall [&>*]:bg-black-50',
  desk: 'bg-study-desk [&>*]:bg-black-50',
  laptop: 'bg-study-laptop [&>*]:bg-black-50',
  plant: 'bg-study-plant [&>*]:bg-black-50',
};

export default async function StudyList() {
  const studies = await fetchStudies();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {studies.map((study: GetStudyDto) => (
        <Link
          key={study.id}
          href={`/study/${study.id}`}
          className={cn(
            'w-full h-full bg-cover rounded bg-no-repeat bg-center min-h-[180px] transition-transform hover:scale-[1.02] focus:scale-[1.02]',
            bgClass[study.background as BgType],
          )}
        >
          <StudyCard {...study} />
        </Link>
      ))}
    </div>
  );
}
