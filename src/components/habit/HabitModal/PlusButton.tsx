import Image from 'next/image';
import plusIcon from '@/public/icons/ic_plus.png';

export const PlusButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='flex justify-center items-center border-2 border-black rounded-[20px] w-[312px] md:w-[400px] xl:w-[400px] min-h-[54px] mt-[14px] md:mt-0 xl:mt-0'
    >
      <Image
        src={plusIcon}
        width={24}
        height={24}
        alt='더하기 아이콘'
      />
    </button>
  );
};
