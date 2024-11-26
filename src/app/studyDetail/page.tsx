'use client';

import React, { useState } from 'react';
import HabitTable from './HabitTable';
import { HabitRecord, StudyDetail } from './type';
import { GNB } from '@/components/layout';
import { StudyNav } from '@/components/common/StudyNav';

export default function StudyDetailPage() {
  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [studyDetail, setStudyDetail] = useState<StudyDetail>({
    description: '소개를 입력해주세요',
  });

  const [habits, setHabits] = useState<HabitRecord[]>([]);

  return (
    <div className='bg-background'>
      <GNB />
      <div
        className='bg-white max-w-screen-xl mx-auto
    h-[56rem] p-10 mt-10 mb-[73px] rounded-[20px]'
      >
        <div className='items-center mb-4'>
          <StudyNav
            nickname='연우'
            studyName='개발공장'
          />
        </div>
        <div className='mb-6 gap-2'>
          <h3 className='text-lg text-gray font-normal'>소개</h3>
          <p className='text-lg text-black font-medium'>
            {studyDetail.description}
          </p>
        </div>
        <div className='gap-2'>
          <h3 className='text-lg text-gray font-normal'>
            현재까지 획득한 포인트
          </h3>
          {/* 포인트 아이콘 */}
        </div>
        <div className='mt-10'>
          <HabitTable
            habits={habits}
            onHabitChange={setHabits}
          />
        </div>
      </div>
    </div>
  );
}
