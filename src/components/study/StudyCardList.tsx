'use client';

import { useState, type ReactNode } from 'react';

import Dropdown, { type DropdownOption } from './Dropdown';
import SearchInput from './SearchInput';

const SORT_OPTIONS: DropdownOption[] = [
  { label: '최신 순', orderBy: 'createdAt', order: 'desc' },
  { label: '오래된 순', orderBy: 'createdAt', order: 'asc' },
  { label: '많은 포인트 순', orderBy: 'points', order: 'desc' },
  { label: '적은 포인트 순', orderBy: 'points', order: 'asc' },
];

interface StudyCardListProps {
  children: ReactNode;
}

export default function StudyCardList({ children }: StudyCardListProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedSortOpt, setSelectedSortOpt] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between flex-col sm:flex-row'>
        <SearchInput
          name='search'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder='검색'
          aria-label='스터디 검색'
          aria-required='false'
        />
        <Dropdown
          options={SORT_OPTIONS}
          selected={selectedSortOpt}
          onChange={(option) => setSelectedSortOpt(option)}
        />
      </div>

      {children}

      <div className='pt-9 grid grid-cols-3'>
        <button
          type='button'
          className='outlined text-green-text col-start-2 font-medium'
        >
          더보기
        </button>
      </div>
    </div>
  );
}
