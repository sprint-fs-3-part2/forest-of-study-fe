'use client';

import cn from '@/lib/cn';
import FormLabel from './FormLabel';
import { BORDER, INPUT_FONT, INPUT_LAYOUT } from '@/constants/createStudyStyle';
import ErrorMessage from './ErrorMessage';

// type TextareaProps = {
//   id: string;
//   value: string;
//   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// };

type TextareaProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  error?: string | null;
  required?: boolean;
};

const Textarea = ({
  id,
  value,
  onChange,
  placeholder = '소개 멘트를 작성해 주세요',
  maxLength = 500,
  rows = 4,
  error,
  required = true,
}: TextareaProps) => {
  return (
    <>
      <FormLabel target={id}>내용</FormLabel>
      <textarea
        id={id}
        name={id}
        aria-label='스터디 소개'
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        className={cn(INPUT_LAYOUT, INPUT_FONT, BORDER)}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && (
        <ErrorMessage
          id={id}
          error={error}
        />
      )}
    </>
  );
};

export default Textarea;
