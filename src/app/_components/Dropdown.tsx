'use client';
import Image from 'next/image';
import { useRef } from 'react';

export type DropdownOption = {
  label: string;
  orderBy: 'createdAt' | 'points';
  order: 'asc' | 'desc';
};

type DropdownProps = {
  selected: DropdownOption;
  options: DropdownOption[];
  onChange: (option: DropdownOption) => void;
};

export default function Dropdown({
  selected,
  options,
  onChange,
}: Readonly<DropdownProps>) {
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  return (
    <details
      ref={dropdownRef}
      className='relative min-w-[180px] outlined max-h-10 [&>*]:text-base [&>*]:font-normal [&>*]:leading-none [&>*]:cursor-pointer group'
    >
      <summary className='text-gray list-none flex justify-between items-center'>
        <span>{selected.label}</span>
        <span className='transition-transform group-open:rotate-180'>
          <Image
            src='/icons/ic_chevron_down.svg'
            alt='dropdown icon'
            width={16}
            height={16}
          />
        </span>
      </summary>
      <ul className='absolute inset-x-0 bg-white top-12 outlined p-0 min-w-[180px]'>
        {options.map((option) => (
          <li
            className='border-b last:border-0 text-center py-3 '
            key={option.label}
          >
            <button
              className='w-full h-full'
              type='button'
              value={option.label}
              onClick={() => {
                onChange(option);
                if (dropdownRef.current !== null) {
                  dropdownRef.current.open = false;
                }
              }}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
