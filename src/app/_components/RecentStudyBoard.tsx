export default async function RecentStudyBoard() {
  return (
    <section className='container base-container min-h-[382px] grid grid-rows-[auto_1fr] max-w-[1200px] mx-auto'>
      <h1 className='heading-2'>최근 조회한 스터디</h1>
      <div className='container flex items-center justify-center'>
        <p className='caption-base mx-auto'>아직 조회한 스터디가 없어요</p>
      </div>
    </section>
  );
}
