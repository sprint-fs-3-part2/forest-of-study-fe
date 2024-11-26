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
      console.error('습관 상태 변경 중 오류 발생:', e);
      throw new Error(
        '습관 상태를 변경하는 중 문제가 발생했습니다. 다시 시도해 주세요.',
      );
    }
  };

  return (
    <ul
      className='flex flex-col gap-5 h-[500px] overflow-y-auto'
      role='list'
      aria-label='습관 목록'
    >
      {!habits.length && (
        <div
          className='flex m-auto flex-col justify-center items-center font-medium text-gray'
          role='status'
          aria-live='polite'
        >
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
