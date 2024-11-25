'use client';

import { useEffect, useState } from 'react';

import type { GetStudyDto } from '@/services/study/api/types';
import { fetchStudies } from '@/services/study/studyService';
import Dropdown, { type DropdownOption } from './Dropdown';
import SearchInput from './SearchInput';
import StudyCardList from './StudyCardList';

const SORT_OPTIONS: DropdownOption[] = [
  { label: '최신 순', orderBy: 'createdAt', order: 'desc' },
  { label: '오래된 순', orderBy: 'createdAt', order: 'asc' },
  { label: '많은 포인트 순', orderBy: 'points', order: 'desc' },
  { label: '적은 포인트 순', orderBy: 'points', order: 'asc' },
];

const STUDY_EXPLORER_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[822px] mx-auto gap-6',
} as const;

export default function StudyExplorerBoard() {
  const [studies, setStudies] = useState<GetStudyDto[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedSortOpt, setSelectedSortOpt] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );

  useEffect(() => {
    const loadStudies = async () => {
      const studies = await fetchStudies();

      setStudies(studies);
    };

    loadStudies();
  }, []);

  return (
    <section className={STUDY_EXPLORER_BOARD_CLASSES.section}>
      <h1 className='heading-2'>스터디 둘러보기</h1>

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
        <StudyCardList studies={studies} />

        <div className='pt-9 grid grid-cols-3'>
          <button
            type='button'
            className='outlined text-green-text col-start-2 font-medium'
          >
            더보기
          </button>
        </div>
      </div>
    </section>
  );
}
