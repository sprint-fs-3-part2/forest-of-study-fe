'use client';

import { StudyNav } from '@/components/common/StudyNav';
import { useParams } from 'next/navigation';
import { HabitUl, Time, ModalContent } from '@/components/habit/Index';
import { useState } from 'react';
import { Modal } from '@/components/common/Modal';
import { HabitWithoutStudyId } from '@/lib/types/habit/habit.types';

const mockData = [
  { name: '오늘의 습관', id: '1', complete: true },
  { name: '어제의 습관', id: '2', complete: false },
  { name: '내일의 습관', id: '3', complete: true },
];

const mockDataForModal = mockData.map((data) => {
  return { name: data.name, id: data.id };
});

export default function DailyHabitPage() {
  const { id } = useParams();
  // const habitList = getHabits(id);
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleSubmit = async (
    habits: HabitWithoutStudyId[],
    deletedHabitIds: string[],
  ) => {
    const editedHabits = habits.filter((habit) => habit.id !== '');
    const newHabits = habits.filter((habit) => habit.id === '');
    // if (deletedHabitId.length) await handleDeleteHabit()
    return fetch('');
  };

  const handleDeleteHabit = async (id: string) => {
    // 습관 삭제 api
  };

  return (
    <div>
      <Modal isOpen={modalDisplay}>
        {
          <ModalContent
            initialHabits={mockDataForModal}
            onClose={() => setModalDisplay(false)}
            onSubmit={handleSubmit}
          />
        }
      </Modal>
      <StudyNav
        nickname='헌규'
        studyName='넥스트 스터디'
      ></StudyNav>
      <Time />
      <div className='w-full border rounded-[20px] py-10 px-6 flex justify-center'>
        <div className='w-[280px] md:w-[400px] xl:w-[400px] h-fit'>
          <div className=' flex justify-center items-center relative mb-[24px]'>
            <h1 className='font-extrabold text-[24px] text-black'>
              오늘의 습관
            </h1>
            <button
              onClick={() => setModalDisplay(true)}
              className='absolute right-0 text-[14px] text-gray'
            >
              목록 수정
            </button>
          </div>
          <HabitUl habits={mockData} />
        </div>
      </div>
    </div>
  );
}
