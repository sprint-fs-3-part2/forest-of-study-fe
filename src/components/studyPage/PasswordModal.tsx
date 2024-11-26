import { useRouter } from 'next/navigation';
import { CommonBtn } from '../common/CommonBtn';
import { PasswordModalProps } from './studyPage.types';
import { useParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { checkPassword } from '@/services/password/api/passwordApi';
import { Toast } from '../common/Toast/Toast';
import useScreenWidth from '@/hooks/useScreenWidth';
import { deleteStudy } from '@/services/study/api/studyApi';

export function PasswordModalContent({
  nickname,
  studyName,
  variant,
  onClose,
}: PasswordModalProps) {
  const { id: studyId } = useParams<{ id: string }>();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const screenWidth = useScreenWidth();
  const BUTTON_TEXT = {
    edit: '수정하러 가기',
    delete: '삭제하기',
    focus: '오늘의 집중으로 가기',
    habit: '오늘의 습관으로 가기',
  };

  const DESTINATION = {
    edit: `/study/${studyId}/edit`,
    delete: `/`,
    focus: `/study/${studyId}/focus`,
    habit: `/study/${studyId}/habit`,
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setShowToast(false);
    const result = await check(password);
    if (variant === 'delete') await deleteStudy(studyId);
    result && variant && router.push(DESTINATION[variant]);
    !result && setShowToast(true);
  };

  const check = async (password: string): Promise<boolean> => {
    const result = await checkPassword(studyId, password);
    return result;
  };

  return (
    variant && (
      <>
        <div className='w-full relative flex items-center justify-center'>
          <span className='font-extrabold text-[24px] text-black'>
            {nickname}의 {studyName}
          </span>
          {screenWidth !== 'small' && (
            <button
              className='absolute right-0 text-green-text font-medium text-[16px]'
              onClick={onClose}
            >
              나가기
            </button>
          )}
        </div>
        <div className='w-full flex justify-center items-center my-[24px]'>
          권한이 필요해요!
        </div>
        <form
          onSubmit={onSubmit}
          className='w-full flex flex-col gap-y-4'
        >
          <label className='font-semibold text-[18px]'>비밀번호</label>
          <div>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border border-gray-light rounded-[15px]'
              placeholder='비밀번호를 입력해 주세요'
            ></input>
          </div>
          <CommonBtn
            type='submit'
            widthType='full'
            heightType='fixed'
            className='mt-[14px]'
          >
            {BUTTON_TEXT[variant]}
          </CommonBtn>
        </form>
        {screenWidth === 'small' && (
          <button
            className='text-green-text mt-[14px] font-medium text-[16px]'
            onClick={onClose}
          >
            나가기
          </button>
        )}
        {showToast && (
          <Toast
            className='absolute bottom-[-290px]'
            variant='warning'
          >
            🚨 비밀번호가 일치하지 않습니다. 다시 입력해주세요.
          </Toast>
        )}
      </>
    )
  );
}
