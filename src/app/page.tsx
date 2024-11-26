import RecentStudyBoard from '@/components/study/RecentStudyBoard';
import StudyExplorerBoard from '@/components/study/StudyExplorerBoard';

export default function Home() {
  return (
    <div className='gap-6 grid pb-44'>
      <RecentStudyBoard />
      <StudyExplorerBoard />
    </div>
  );
}
