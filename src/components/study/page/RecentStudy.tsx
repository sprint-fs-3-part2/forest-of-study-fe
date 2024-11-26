'use client';

import { useState } from 'react';

import type { GetStudyDto } from '@/services/study/api/types';

import { Study } from '..';

const RECENT_STUDY_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[382px] mx-auto gap-6 overflow-x-auto',
};

const RECENT_STUDIES_KEY = 'recent-studies';
const MAX_RECENT_STUDIES = 3;

function RecentStudyGrid() {
  const [recentStudies, _setRecentStudies] = useState<GetStudyDto[]>([]);

  // useEffect(() => {
  //   async function fetchRecentStudies() {
  //     try {
  //       const studies = await fetchRecentStudies();

  //       if (studies.length === 0) {
  //         setRecentStudies([]);
  //         return;
  //       }

  //       setRecentStudies(studies);
  //     } catch (error) {
  //       console.error('최근 조회한 스터디 로딩 실패:', error);
  //       setRecentStudies([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchRecentStudies();
  // }, []);

  if (recentStudies.length === 0) {
    return (
      <div className='text-center py-8 text-gray'>
        최근 조회한 스터디가 없습니다
      </div>
    );
  }

  return <Study.Grid studies={recentStudies} />;
}

export default function RecentStudy() {
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
      <div className='container flex items-center justify-center'>
        <p className='caption-base mx-auto'>아직 조회한 스터디가 없어요</p>
      </div>
    </section>
  );
}
