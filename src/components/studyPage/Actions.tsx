import { ActionsProps } from './studyPage.types';

export const Actions = ({ setVariant }: ActionsProps) => {
  return (
    <div className='flex gap-2 md:gap-4 xl:gap-4 text-[12px] md:text-[16px] xl:text-[16px]'>
      <span className='text-green-text'>공유하기</span>
      <span>|</span>
      <span
        className='text-green-text'
        onClick={() => setVariant('edit')}
      >
        수정하기
      </span>
      <span>|</span>
      <span onClick={() => setVariant('delete')}>스터디 삭제하기</span>
    </div>
  );
};
