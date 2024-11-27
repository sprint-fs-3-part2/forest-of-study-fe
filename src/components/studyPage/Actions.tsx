import { usePathname } from 'next/navigation';
import { ActionsProps } from './studyPage.types';

export const Actions = ({ setVariant }: ActionsProps) => {
  const pathname = usePathname();

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;
    try {
      await navigator.clipboard.writeText(url);
      alert('공유할 URL이 클립보드에 복사되었습니다.');
    } catch (err) {
      console.error('URL 복사 실패:', err);
    }
  };

  return (
    <div className='flex gap-2 md:gap-4 xl:gap-4 text-[12px] md:text-[16px] xl:text-[16px]'>
      <span
        className='text-green-text cursor-pointer'
        onClick={handleShare}
      >
        공유하기
      </span>
      <span>|</span>
      <span
        className='text-green-text cursor-pointer'
        onClick={() => setVariant('edit')}
      >
        수정하기
      </span>
      <span>|</span>
      <span
        className='cursor-pointer'
        onClick={() => setVariant('delete')}
      >
        스터디 삭제하기
      </span>
    </div>
  );
};
