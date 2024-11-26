import cn from '@/lib/cn';
import {
  HabitResponseDto,
  StudyHabitsResponseDto,
} from '@/lib/types/api/data-contracts';
import Image from 'next/image';
import PawIcon from '@/public/icons/habit_icon.png';

const getCompletedDays = (habit: HabitResponseDto) => {
  const days = habit.completedHabitsThisWeek.map((completedHabit) =>
    new Date(completedHabit.completedAt).getDay(),
  );
  return days;
};

export function HabitTable({
  habitsProps,
}: {
  habitsProps: StudyHabitsResponseDto;
}) {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const { habits } = habitsProps;

  const completeDays = habits.map((habit) => getCompletedDays(habit));

  return (
    <div className='w-full flex flex-col h-[450px] md:h-[511px] xl:h-[511px] p-6 border rounded-[20px] overflow-scroll'>
      <div />
      {habits.length < 1 && (
        <div
          className='flex m-auto flex-col justify-center items-center font-medium text-gray'
          role='status'
          aria-live='polite'
        >
          <p>아직 습관이 없어요</p>
          <p>오늘의 습관에서 습관을 생성해보세요</p>
        </div>
      )}
      {habits.length > 0 && (
        <>
          <h1 className='text-xl font-bold mb-4'>습관 기록표</h1>
          <div className='grid habit-grid items-center gap-4'>
            <div>
              <div className='font-medium h-8 flex justify-end items-center' />
              {habits.map((habit) => (
                <div
                  key={habit.name}
                  className='h-8 flex justify-end items-center px-[15px] md:px-6 xl:px-6 text-right font-bold text-black text-[14px] md:text-[18px] xl:text-[18px] my-[14px]'
                >
                  {habit.name}
                </div>
              ))}
            </div>
            {days.map((day, dayIndex) => (
              <div
                key={day}
                className='space text-gray'
              >
                <div className='text-center flex justify-center items-center font-medium h-8'>
                  {day}
                </div>
                {habits.map((_, habitIndex) => {
                  return (
                    <div
                      key={habitIndex}
                      className='flex justify-center h-8 my-[14px]'
                    >
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full',
                          completeDays[habitIndex].find(
                            (day) => day === dayIndex + 1,
                          )
                            ? `bg-habit-${habitIndex + 1}`
                            : 'bg-gray-light',
                          'flex items-center justify-center',
                        )}
                      >
                        <Image
                          src={PawIcon}
                          alt='습관 완료 여부 이미지'
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
