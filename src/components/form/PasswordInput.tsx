'use client';

import cn from '@/lib/cn';
import { BORDER, INPUT_FONT, INPUT_LAYOUT } from '@/app/study/create/page';
import FormLabel from './FormLabel';

export enum PasswordType {
  PASSWORD = 'password',
  PASSWORD_CONFIRM = 'passwordConfirm',
}

type PasswordInputProps = {
  id: PasswordType;
  title?: string;
  isConfirm: boolean;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = ({
  id,
  title,
  isConfirm,
  value,
  onChange,
}: PasswordInputProps) => {
  const placeholder = isConfirm ? '비밀번호 확인을' : '비밀번호를';
  return (
    <>
      <FormLabel target={id}>{title}</FormLabel>
      <input
        id={id}
        name={id}
        type='password'
        placeholder={`${placeholder} 입력해 주세요`}
        className={cn(INPUT_LAYOUT, INPUT_FONT, BORDER)}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PasswordInput;
