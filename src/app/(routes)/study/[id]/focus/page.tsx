import { StudyNav } from '@/components/common/StudyNav';
import * as FocusToday from './index';

const FocusTodayPage = () => {
  return (
    // <div className='w-full h-screen pt-5 px-6'>
    //   <main className='bg-white max-w-[1248px] max-h-[774px] mx-auto rounded-[20px] p-10 md:p-6 sm:p-4 max-sm:p-4'>
    <>
      {/* <FocusToday.Header /> */}
      <StudyNav
        nickname='연우'
        studyName='개발공장'
      />
      <FocusToday.Point />
      <FocusToday.Timer />
    </>
    // </main>
    // </div>
  );
};

export default FocusTodayPage;
