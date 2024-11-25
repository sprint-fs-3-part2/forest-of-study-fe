import cn from '@/lib/cn';
import { HabitLiProps } from '../habitComponent.types';

const COLORS = {
  complete: 'bg-brand text-white',
  incomplete: 'bg-gray-lighter text-gray',
};

export const HabitLi = ({
  habit: { id, completedToday, name },
  onClick,
}: HabitLiProps) => {
  return (
    <button
      onClick={() => onClick(id, completedToday)}
      className={cn(
        'w-full min-h-[54px] rounded-[20px] flex items-center justify-center cursor-pointer font-bold',
        COLORS[completedToday ? 'complete' : 'incomplete'],
      )}
    >
      {name}
    </button>
  );
};
