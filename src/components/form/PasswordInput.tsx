'use client';

import cn from '@/lib/cn';
import { BORDER, INPUT_FONT, INPUT_LAYOUT } from '@/constants/createStudyStyle';
import FormLabel from './FormLabel';
import ErrorMessage from './ErrorMessage';

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
  onChange?: (e: string) => void;
  error: string | null;
};

const PasswordInput = ({
  id,
  title,
  isConfirm,
  value,
  onChange,
  error,
}: PasswordInputProps) => {
  const placeholder = isConfirm ? '비밀번호 확인을' : '비밀번호를';
  return (
    <div>
      <FormLabel target={id}>{title}</FormLabel>
      <input
        id={id}
        name={id}
        type='password'
        placeholder={`${placeholder} 입력해 주세요`}
        className={cn(INPUT_LAYOUT, INPUT_FONT, BORDER)}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={isConfirm ? 'new-password' : 'current-password'}
      />
      <div>
        {error && (
          <ErrorMessage
            id={`${id}-error`}
            key={id}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
