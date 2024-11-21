'use client';
import Dropdown, { type DropdownOption } from './Dropdown';
import SearchInput from './SearchInput';
import { useState } from 'react';

const SORT_OPTIONS: DropdownOption[] = [
  { label: '최신 순', orderBy: 'createdAt', order: 'desc' },
  { label: '오래된 순', orderBy: 'createdAt', order: 'asc' },
  { label: '많은 포인트 순', orderBy: 'points', order: 'desc' },
  { label: '적은 포인트 순', orderBy: 'points', order: 'asc' },
];

const STUDY_EXPLORER_BOARD_CLASSES = {
  section:
    'container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[822px] mx-auto gap-6',
};

type Study = {
  id: string;
  name: string;
  nickname: string;
  intro: string;
  background: 'blue' | 'green' | 'yellow' | 'red';

  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function StudyExplorerBoard() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedSortOpt, setSelectedSortOpt] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );

  return (
    <section className={STUDY_EXPLORER_BOARD_CLASSES.section}>
      <h1 className='heading-2'>스터디 둘러보기</h1>
      <div>
        <div className='flex justify-between'>
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
        <div className='container grid place-items-center h-full'>
          {studies.length > 0 &&
            studies.map((study) => <div key={study.id}>{study.name}</div>)}
          {studies?.length === 0 && (
            <p className='caption-base'>아직 둘러 볼 스터디가 없어요</p>
          )}
        </div>
      </div>
    </section>
  );
}
