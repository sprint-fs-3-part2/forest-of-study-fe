'use client';

const RECENT_STUDY_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[382px] mx-auto gap-6',
};

export default function RecentStudyBoard() {
  return (
    <section
      className={RECENT_STUDY_BOARD_CLASSES.section}
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
