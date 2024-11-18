import RecentStudyBoard from './_components/RecentStudyBoard';
import StudyExplorerBoard from './_components/StudyExplorerBoard';

export default function Home() {
  return (
    <div className='grid gap-6 pb-44'>
      <RecentStudyBoard />
      <StudyExplorerBoard />
    </div>
  );
}
