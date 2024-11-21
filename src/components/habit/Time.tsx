import { useFormattedDate } from '@/hooks/useFormattedDate';

export const Time = () => {
  const time = useFormattedDate();
  return (
    <>
      <div className='mb-2'>현재 시간</div>
      <div className='w-[184px] py-2 px-3 border rounded-[50px] mb-[24px]'>
        {time}
      </div>
    </>
  );
};
