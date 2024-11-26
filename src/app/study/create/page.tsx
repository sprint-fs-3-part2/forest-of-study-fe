'use client';

import { CommonBtn } from '@/components/common/CommonBtn';
import BasicInput from '@/components/form/BasicInput';
import BgSelector from '@/components/form/BgSelector';
import PasswordInput, { PasswordType } from '@/components/form/PasswordInput';
import Textarea from '@/components/form/Textarea';
import { TITLE_FONT } from '@/constants/createStudyStyle';
import { axiosInstance } from '@/lib/axios/axiosInstance';
import cn from '@/lib/cn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  nickname: string;
  name: string;
  intro: string;
  background: string;
  password: string;
  passwordConfirm: string;
};

type ErrorState = {
  nicknameError: string;
  nameError: string;
  introError: string;
  backgroundError: string;
  passwordError: string;
  passwordConfirmError: string;
  generalError?: string;
};

const CreateStudyPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nickname: '',
    name: '',
    intro: '',
    background: '',
    password: '',
    passwordConfirm: '',
  });

  const [error, setError] = useState<ErrorState>({
    nicknameError: '',
    nameError: '',
    introError: '',
    backgroundError: '',
    passwordError: '',
    passwordConfirmError: '',
    generalError: '',
  });

  const router = useRouter();

  const validateForm = () => {
    const newErrors: ErrorState = {
      nicknameError: '',
      nameError: '',
      introError: '',
      backgroundError: '',
      passwordError: '',
      passwordConfirmError: '',
    };

    let isValid = true;

    if (!formData.nickname) {
      newErrors.nicknameError = '닉네임을 입력해주세요';
      isValid = false;
    }
    if (!formData.name) {
      newErrors.nameError = '스터디 이름을 입력해주세요';
      isValid = false;
    }
    if (!formData.intro) {
      newErrors.introError = '소개를 입력해주세요';
      isValid = false;
    }
    if (!formData.background) {
      newErrors.backgroundError = '배경을 선택해주세요';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.passwordError = '비밀번호를 입력해주세요';
      isValid = false;
    }
    if (!formData.passwordConfirm) {
      newErrors.passwordConfirmError = '비밀번호 확인을 입력해주세요';
      isValid = false;
    }

    setError(newErrors);
    console.log(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({
      nicknameError: '',
      nameError: '',
      introError: '',
      backgroundError: '',
      passwordError: '',
      passwordConfirmError: '',
    });

    try {
      // 클라이언트 측 유효성 검사
      if (!validateForm()) {
        alert('유효성 검사 실패');
        return;
      }
      // passwordConfirm 제외하고 서버로 데이터 전송
      const { passwordConfirm: _passwordConfirm, ...submitData } = formData;
      const response = await axiosInstance.post('/studies', submitData);
      console.log(response);
      // 성공 시 해당 스터디 페이지로 이동
      router.push(`/study/${response.data.id}`);
    } catch (err) {
      console.log(err);
      setError((prev) => ({
        ...prev,
        generalError:
          err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다',
      }));
    }
  };

  const validatePassword = (password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) {
      setError((prev) => ({
        ...prev,
        passwordConfirmError: '비밀번호가 일치하지 않습니다.',
      }));
    } else {
      setError((prev) => ({
        ...prev,
        passwordConfirmError: '',
      }));
    }
  };

  return (
    <div>
      <form
        id='createStudy'
        onSubmit={handleSubmit}
      >
        <h2 className={cn(TITLE_FONT)}>스터디 만들기</h2>
        <BasicInput
          id='nickname'
          title='닉네임'
          type='text'
          value={formData.nickname}
          onChange={(e) =>
            setFormData({ ...formData, nickname: e.target.value })
          }
          error={error.nicknameError}
        />
        <BasicInput
          id='name'
          title='스터디 이름'
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={error.nameError}
        />
        <Textarea
          id='intro'
          value={formData.intro}
          onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
          error={error.introError}
        />
        <BgSelector
          title='배경을 선택해주세요'
          defaultValue={formData.background}
          onChange={(e) => setFormData({ ...formData, background: e })}
          // error={error.backgroundError}
        />
        <PasswordInput
          id={PasswordType.PASSWORD}
          title='비밀번호'
          isConfirm={false}
          value={formData.password}
          onChange={(e) => {
            const newPassword = e;
            setFormData({ ...formData, password: newPassword });
            validatePassword(newPassword, formData.passwordConfirm);
          }}
          error={error.passwordError}
        />
        <PasswordInput
          id={PasswordType.PASSWORD_CONFIRM}
          title='비밀번호 확인'
          isConfirm={true}
          value={formData.passwordConfirm}
          onChange={(e) => {
            const newPasswordConfirm = e;
            setFormData({ ...formData, passwordConfirm: newPasswordConfirm });
            validatePassword(formData.password, newPasswordConfirm);
          }}
          error={error.passwordConfirmError}
        />
        <CommonBtn
          widthType={'full'}
          heightType={'fixed'}
          className={cn('mt-10')}
          type='submit'
        >
          만들기
        </CommonBtn>
      </form>
      {error.generalError && (
        <div className='text-error'>{error.generalError}</div>
      )}
    </div>
  );
};

export default CreateStudyPage;
