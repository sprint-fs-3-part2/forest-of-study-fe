'use client';

import cn from '@/lib/cn';
import FormLabel from './FormLabel';
import { BORDER, INPUT_FONT, INPUT_LAYOUT } from '@/app/study/create/page';

type TextareaProps = {
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ id, value, onChange }: TextareaProps) => {
  const placeholder = `소개 멘트를 작성해 주세요`;
  return (
    <>
      <FormLabel target={id}>내용</FormLabel>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className={cn(INPUT_LAYOUT, INPUT_FONT, BORDER)}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Textarea;
