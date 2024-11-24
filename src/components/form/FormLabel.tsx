import { ReactNode } from 'react';

interface FormLabelProps {
  target: string;
  children: ReactNode;
}

const FormLabel = ({ target, children }: FormLabelProps) => {
  return (
    <label
      htmlFor={target}
      className='block text-lg font-semibold text-neutral-700'
    >
      {children}
    </label>
  );
};

export default FormLabel;
