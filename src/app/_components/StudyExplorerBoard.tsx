import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

async function getStudies() {
  try {
    const res = await fetch(`http://localhost:8000/studies`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function StudyExplorerBoard() {
  const studies = await getStudies();
  return (
    <section className='container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[822px] mx-auto gap-6'>
      <h1 className='heading-2'>스터디 둘러보기</h1>
      <div className=''>
        <div className='flex justify-between'>
          <SearchInput />
          <Dropdown />
        </div>
        <div className='container grid place-items-center'>
          {studies?.length < 1 && (
            <p className='caption-base'>아직 둘러 볼 스터디가 없어요</p>
          )}
        </div>
      </div>
    </section>
  );
}
