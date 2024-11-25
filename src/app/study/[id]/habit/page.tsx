'use client';

import { StudyNav } from '@/components/common/StudyNav';
import { useParams } from 'next/navigation';
import { HabitUl, Time, ModalContent } from '@/components/habit/Index';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/common/Modal';
import { getStudyById } from '@/services/study/api/studyApi';
import {
  createHabits,
  deleteHabits,
  editHabits,
  getHabits,
} from '@/services/habit/api/habitApi';
import { HabitFormRow } from '@/components/habit/habitComponent.types';
import {
  CreateStudyDto,
  HabitResponseDto,
} from '@/lib/types/api/data-contracts';

export default function DailyHabitPage() {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<CreateStudyDto>();
  const [habits, setHabits] = useState<HabitResponseDto[]>([]);
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    const getStudy = async () => {
      const study = await getStudyById(id);
      setStudy(study);
    };

    getStudy();
  }, [id]);

  const switchTargetHabitComplete = (habitId: string) => {
    setHabits((prev) => {
      const newHabits = prev.map((habit) => ({ ...habit }));
      const targetHabit = newHabits.find((habit) => habit.id === habitId);
      if (targetHabit) {
        targetHabit.completedToday = !targetHabit.completedToday;
      }
      return newHabits;
    });
  };

  const fetchHabits = async () => {
    const { habits } = await getHabits(id);
    setHabits(habits);
  };

  useEffect(() => {
    fetchHabits();
  }, [id]);

  const handleSubmit = async (
    habitRows: HabitFormRow[],
    deletedHabitIds: string[],
  ) => {
    const editedHabits = habitRows.filter((habit) => {
      const originalHabit = habits.find((ogHabit) => ogHabit.id === habit.id);
      return originalHabit?.name !== habit.name && habit.id !== '';
    });
    const newHabits = habitRows.filter(
      (habit) => habit.id === '' && habit.name !== '',
    );
    editedHabits.length && (await editHabits(id, { habits: editedHabits }));
    newHabits.length && (await createHabits(id, { habits: newHabits }));
    deletedHabitIds.length && (await deleteHabits(id, deletedHabitIds));
    (editedHabits.length || newHabits.length || deletedHabitIds.length) &&
      fetchHabits();
    setModalDisplay(false);
  };

  return (
    <div>
      <Modal isOpen={modalDisplay}>
        {
          <ModalContent
            initialHabits={habits}
            onClose={() => setModalDisplay(false)}
            onSubmit={handleSubmit}
          />
        }
      </Modal>

      {study && (
        <StudyNav
          nickname={study?.nickname}
          studyName={study?.name}
        ></StudyNav>
      )}
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
          <HabitUl
            habits={habits}
            switchHabitComplete={switchTargetHabitComplete}
          />
        </div>
      </div>
    </div>
  );
}
