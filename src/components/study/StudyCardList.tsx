import { GetStudyDto } from '@/services/study/api/types';
import Link from 'next/link';
import StudyCard from './StudyCard';

export default function StudyCardList({
  studies,
}: Readonly<{ studies: GetStudyDto[] }>) {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {studies.length > 0 &&
        studies.map((study) => (
          <Link
            key={study.id}
            href={`/study/${study.id}`}
            className='w-full h-full'
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
