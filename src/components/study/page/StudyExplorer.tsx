import { Suspense } from 'react';

import { fetchStudies } from '@/services/study/studyService';

import { Study } from '..';

const CLASSES = {
  section: [
    'container',
    'base-container',
    'grid',
    'grid-rows-[auto_1fr]',
    'max-w-[1200px]',
    'min-h-[822px]',
    'mx-auto',
    'gap-6',
  ].join(' '),
} as const;

async function ExplorerStudyGrid() {
  const studies = await fetchStudies({ page: 1, take: 6 });
  return <Study.Grid studies={studies} />;
}

export default function StudyExplorer() {
  return (
    <section className={CLASSES.section}>
      <h1 className='heading-2'>스터디 둘러보기</h1>
      <Suspense fallback={<Study.GridSkeleton />}>
        <Study.ListContainer>
          <ExplorerStudyGrid />
        </Study.ListContainer>
      </Suspense>
    </section>
  );
}
