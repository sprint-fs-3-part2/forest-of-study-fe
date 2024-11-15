import * as FocusToday from './FocusToday';

const FocusTodayPage = () => {
  const title = '연우의 개발공장';

  return (
    <div className='bg-[#F6F4EF] w-full h-screen pt-5 px-6'>
      <main className='bg-[#FFFFFF] max-w-[1248px] max-h-[774px] mx-auto rounded-[20px] p-10'>
        <FocusToday.Header title={title} />
        <FocusToday.Point />
        <FocusToday.Timer />
      </main>
    </div>
  );
};

export default FocusTodayPage;
