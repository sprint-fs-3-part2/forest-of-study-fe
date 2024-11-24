'use client';

import { CommonBtn } from '@/components/common/CommonBtn';
import BasicInput from '@/components/form/BasicInput';
import BgSelector from '@/components/form/BgSelector';
import PasswordInput, { PasswordType } from '@/components/form/PasswordInput';
import Textarea from '@/components/form/Textarea';
import cn from '@/lib/cn';
import { useState } from 'react';

const TITLE_FONT =
  'text-[16px] md:text-[24px] xl:text-[24px] font-extrabold text-black';
export const INPUT_LAYOUT = 'w-full';
export const INPUT_FONT =
  'text-[16px] md:text-[18px] xl:text-[18px] text-black';
export const BORDER =
  'rounded-2xl border focus:ring-0 ring-0 outline-0 boder-black/10 hover:border-black/20';

type FormData = {
  nickname: string;
  studyName: string;
  intro: string;
  background: string;
  password: string;
  passwordConfirm: string;
};

const CreateStudyPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nickname: '',
    studyName: '',
    intro: '',
    background: '',
    password: '',
    passwordConfirm: '',
  });
  return (
    <form
      id='createStudy'
      action='/studies'
      method='POST'
    >
      <h2 className={cn(TITLE_FONT)}>스터디 만들기</h2>
      <BasicInput
        id='nickname'
        title='닉네임'
        type='text'
        value={formData.nickname}
        onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
      />
      <BasicInput
        id='studyName'
        title='스터디 이름'
        type='text'
        value={formData.studyName}
        onChange={(e) =>
          setFormData({ ...formData, studyName: e.target.value })
        }
      />
      <Textarea
        id='intro'
        value={formData.intro}
        onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
      ></Textarea>
      <BgSelector title='배경을 선택해주세요' />
      <PasswordInput
        id={PasswordType.PASSWORD}
        title='비밀번호'
        isConfirm={false}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <PasswordInput
        id={PasswordType.PASSWORD_CONFIRM}
        title='비밀번호 확인'
        isConfirm={true}
        value={formData.passwordConfirm}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <CommonBtn
        widthType={'full'}
        heightType={'fixed'}
      >
        만들기
      </CommonBtn>
    </form>
  );
};

export default CreateStudyPage;
