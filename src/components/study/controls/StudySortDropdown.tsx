'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const DROPDOWN_CLASSES = {
  details:
    'relative min-w-[180px] outlined max-h-10 [&>*]:text-base [&>*]:font-normal [&>*]:leading-none [&>*]:cursor-pointer group',
  summary: 'text-gray list-none flex justify-between items-center',
  ul: 'absolute inset-x-0 bg-white top-12 outlined p-0 min-w-[180px]',
  li: 'border-b last:border-0 text-center py-3',
};

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

export default function StudySortDropdown({
  selected,
  options,
  onChange,
}: Readonly<DropdownProps>) {
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <details
      ref={dropdownRef}
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
      className={DROPDOWN_CLASSES.details}
    >
      <summary
        className={DROPDOWN_CLASSES.summary}
        role='button'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
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
      <ul
        className={DROPDOWN_CLASSES.ul}
        role='listbox'
      >
        {options.map((option) => (
          <li
            className={DROPDOWN_CLASSES.li}
            key={option.label}
            role='option'
            aria-selected={option.label === selected.label}
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
