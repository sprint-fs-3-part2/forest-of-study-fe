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

export default function StudyExplorerBoard() {
  const [studies, setStudies] = useState([]);
  const [selectedSortOpt, setSelectedSortOpt] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );
  const [searchKeyword, setSearchKeyword] = useState('');
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch('http://localhost:8000/studies');
  //     const data = await res.json();
  //     setStudies(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <section className='container base-container grid grid-rows-[auto_1fr] max-w-[1200px] min-h-[822px] mx-auto gap-6'>
      <h1 className='heading-2'>스터디 둘러보기</h1>
      <div className=''>
        <div className='flex justify-between'>
          <SearchInput
            name='search'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder='검색'
          />
          <Dropdown
            options={SORT_OPTIONS}
            selected={selectedSortOpt}
            onChange={(option) => setSelectedSortOpt(option)}
          />
        </div>
        <div className='container grid place-items-center h-full'>
          <p className='caption-base'>아직 둘러 볼 스터디가 없어요</p>
        </div>
      </div>
    </section>
  );
}
