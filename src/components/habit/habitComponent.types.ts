import { HabitWithoutStudyId, TodayHabit } from '@/lib/types/habit/habit.types';

export interface HabitLiProps {
  habit: TodayHabit;
  onClick: (id: string) => void;
}

export interface HabitUlProps {
  habits: TodayHabit[];
}

export interface ModalRowProps {
  register: any;
  name: string;
  onDelete: () => void;
}

export interface HabitForm {
  habits: HabitWithoutStudyId[];
}

export interface ModalContentProps {
  onClose: () => void;
  initialHabits: HabitWithoutStudyId[];
  onSubmit: (
    habits: HabitWithoutStudyId[],
    deletedHabitIds: string[],
  ) => Promise<Response>;
}
