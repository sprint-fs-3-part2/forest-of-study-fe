import { Suspense } from 'react';

import StudyCardList from './StudyCardList';
import StudyList from './StudyList';

const STUDY_EXPLORER_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[822px] mx-auto gap-6',
} as const;

export default function StudyExplorerBoard() {
  return (
    <section className={STUDY_EXPLORER_BOARD_CLASSES.section}>
      <h1 className='heading-2'>스터디 둘러보기</h1>
      <Suspense
        fallback={
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='h-[300px] rounded border-black-10 border p-[30px] animate-pulse bg-gray-100'
              />
            ))}
          </div>
        }
      >
        <StudyCardList>
          <StudyList />
        </StudyCardList>
      </Suspense>
    </section>
  );
}
