import Link from 'next/link';

import { STUDY_GRID_CLASSES, STUDY_BG_STYLES } from '@/constants/studyStyle';
import { getBgType } from '@/lib/utils/typeGuards';
import type { GetStudyDto } from '@/services/study/api/types';

import { Study } from '..';
import Store from '@/utils/store';

const CLASSES = {
  studyLink: [
    'w-full',
    'h-full',
    'bg-cover',
    'rounded',
    'bg-no-repeat',
    'bg-center',
    'min-h-[180px]',
    'transition-transform',
    'hover:scale-[1.02]',
    'focus:scale-[1.02]',
  ].join(' '),
} as const;

interface StudyGridProps {
  studies: readonly GetStudyDto[];
}

export function StudyGrid({ studies }: Readonly<StudyGridProps>) {
  return (
    <div className={STUDY_GRID_CLASSES.container}>
      {studies.map((study) => (
        <Link
          key={study.id}
          href={`/study/${study.id}`}
          className={CLASSES.studyLink}
          style={STUDY_BG_STYLES[getBgType(study.background)]}
        >
          <Study.Card {...study} />
        </Link>
      ))}
    </div>
  );
}
