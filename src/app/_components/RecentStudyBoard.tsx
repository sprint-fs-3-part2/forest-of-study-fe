const CONTAINER_STYLES = {
  base: 'container base-container min-h-[382px] max-w-[1200px] mx-auto',
};

export default function RecentStudyBoard() {
  return (
    <section
      className={CONTAINER_STYLES.base}
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
