'use client';

import { HabitLi } from './HabitLi';
import { HabitUlProps } from '../habitComponent.types';
import {
  completeHabit,
  deleteCompletedHabit,
} from '@/services/habit/api/habitApi';
import { useParams } from 'next/navigation';

export const HabitUl = ({ habits, switchHabitComplete }: HabitUlProps) => {
  const { id } = useParams<{ id: string }>();
  const onClick = async (habitId: string, habitComplete: boolean) => {
    try {
      switchHabitComplete(habitId);
      habitComplete
        ? await deleteCompletedHabit(id, habitId)
        : await completeHabit(id, habitId);
    } catch (e) {
      switchHabitComplete(habitId);
    }
  };

  return (
    <ul className='flex flex-col gap-5 h-[500px] overflow-y-auto'>
      {!habits.length && (
        <div className='flex m-auto flex-col justify-center items-center font-medium text-gray'>
          <p>아직 습관이 없어요</p>
          <p>목록 수정을 눌러 습관을 생성해보세요</p>
        </div>
      )}
      {habits.map((habit) => {
        return (
          <HabitLi
            habit={habit}
            key={habit.id}
            onClick={() => onClick(habit.id, habit.completedToday)}
          ></HabitLi>
        );
      })}
    </ul>
  );
};
