'use client';

import { HabitLi } from './HabitLi';
import { HabitUlProps } from '../habitComponent.types';

export const HabitUl = ({ habits }: HabitUlProps) => {
  const onClick = async (id: string) => {
    // 습관 완료 or 완료 취소 작업
  };

  return (
    <ul className='flex flex-col gap-5 h-[500px] overflow-y-auto'>
      {habits.map((habit) => {
        return (
          <HabitLi
            habit={habit}
            key={habit.id}
            onClick={onClick}
          ></HabitLi>
        );
      })}
    </ul>
  );
};
