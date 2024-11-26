'use client';

import cn from '@/lib/cn';
import { getRecentStudy } from '@/services/study/api/studyApi';
import Store from '@/utils/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import StudyCard from './StudyCard';
import { GetStudyDto } from '@/services/study/api/types';

const RECENT_STUDY_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[382px] mx-auto gap-6',
};

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

export default function RecentStudyBoard() {
  const recentStudyIds = Store.getItem('recentStudy') ?? [];
  const [recentStudies, setRecentStudies] = useState<GetStudyDto[]>([]);

  useEffect(() => {
    const fetchRecentStudies = async () => {
      const data = await getRecentStudy(recentStudyIds.slice(0, 3));
      setRecentStudies(data);
    };
    fetchRecentStudies();
  }, [recentStudyIds]);

  return (
    <section
      className={RECENT_STUDY_BOARD_CLASSES.section}
      aria-labelledby='recent-studies-heading'
    >
      <h1
        id='recent-studies-heading'
        className='heading-2'
      >
        최근 조회한 스터디
      </h1>
      <div className='container flex items-center justify-center gap-1.5'>
        {recentStudies.length > 0 ? (
          recentStudies.map((study) => {
            return (
              <Link
                key={study.id}
                href={`/study/${study.id}`}
                className={cn(
                  'w-full h-full bg-cover rounded bg-no-repeat bg-center min-h-[180px]',
                  bgClass[study.background],
                )}
              >
                <StudyCard {...study} />
              </Link>
            );
          })
        ) : (
          <p className='caption-base mx-auto'>아직 조회한 스터디가 없어요</p>
        )}
      </div>
    </section>
  );
}
