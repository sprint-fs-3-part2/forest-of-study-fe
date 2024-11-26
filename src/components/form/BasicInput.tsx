'use client';

import cn from '@/lib/cn';
import FormLabel from './FormLabel';
import { BORDER, INPUT_FONT, INPUT_LAYOUT } from '@/constants/createStudyStyle';
import ErrorMessage from './ErrorMessage';

type BasicInputProps = {
  id: string;
  title: string;
  type: HTMLInputElement['type'];
  value: string | number;
  error: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// 속성별로 변수들을 정리해보자

const BasicInput = ({
  id,
  title,
  type,
  value,
  onChange,
  error,
}: BasicInputProps) => {
  const placeholder = `${title}을 입력해 주세요`;
  return (
    <div>
      <FormLabel target={id}>{title}</FormLabel>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-label={title}
        aria-required='true'
        className={cn(INPUT_LAYOUT, INPUT_FONT, BORDER)}
        value={value}
        onChange={onChange}
        required
      />
      {error && (
        <ErrorMessage
          key={id}
          errorKey={id}
          error={error}
        />
      )}
    </div>
  );
};

export default BasicInput;
