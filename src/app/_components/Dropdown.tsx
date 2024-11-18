'use client';
import { useState } from 'react';

const values = ['최근 순', '오래된 순', '많은 포인트 순', '적은 포인트 순'];
// TODO: 직접 구현 or 라이브러리 사용 결정

export default function Dropdown() {
  const [currentValue, setCurrentValue] = useState('최근 순');
  return (
    <details className='min-w-[180px] outlined'>
      <summary>{currentValue}</summary>
      <ul className='absolute outlined p-0 min-w-[180px]'>
        {values.map((value) => (
          <li
            className='border-b text-center cursor-pointer'
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </details>
  );
}
