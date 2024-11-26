'use client';

import { useState } from 'react';
import { Study } from '..';
import type { DropdownOption } from '../controls/StudySortDropdown';

const CLASSES = {
  container: 'flex flex-col gap-6',
  controlsWrapper: 'flex justify-between flex-col sm:flex-row',
  loadMoreWrapper: 'pt-9 grid grid-cols-3',
  loadMoreButton:
    'outlined text-green-text col-start-2 font-medium text-center',
} as const;

const SORT_OPTIONS: DropdownOption[] = [
  { label: '최신 순', orderBy: 'createdAt', order: 'desc' },
  { label: '오래된 순', orderBy: 'createdAt', order: 'asc' },
  { label: '많은 포인트 순', orderBy: 'points', order: 'desc' },
  { label: '적은 포인트 순', orderBy: 'points', order: 'asc' },
];

interface StudyListContainerProps {
  children: React.ReactNode;
}

export default function StudyListContainer({
  children,
}: StudyListContainerProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedSortOpt, setSelectedSortOpt] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );

  return (
    <div className={CLASSES.container}>
      <div className={CLASSES.controlsWrapper}>
        <Study.SearchInput
          name='search'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder='검색'
          aria-label='스터디 검색'
          aria-required='false'
        />
        <Study.SortDropdown
          options={SORT_OPTIONS}
          selected={selectedSortOpt}
          onChange={(option) => setSelectedSortOpt(option)}
        />
      </div>

      {children}

      <div className={CLASSES.loadMoreWrapper}>
        <form className={CLASSES.loadMoreButton}>
          <button type='submit'>더보기</button>
        </form>
      </div>
    </div>
  );
}
