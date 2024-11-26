import { STUDY_GRID_CLASSES } from '@/constants/studyStyle';

const CLASSES = {
  skeletonItem: [
    'h-[300px]',
    'rounded',
    'border-black-10',
    'border',
    'p-[30px]',
    'animate-pulse',
    'bg-gray-100',
  ].join(' '),
} as const;

export default function StudyGridSkeleton() {
  return (
    <div className={STUDY_GRID_CLASSES.container}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={CLASSES.skeletonItem}
        />
      ))}
    </div>
  );
}
