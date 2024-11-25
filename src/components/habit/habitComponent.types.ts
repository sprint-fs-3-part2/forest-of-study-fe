import { HabitResponseDto } from '@/lib/types/api/data-contracts';

export interface HabitLiProps {
  habit: HabitResponseDto;
  onClick: (habitId: string, habitComplete: boolean) => void;
}

export interface HabitUlProps {
  habits: HabitResponseDto[];
  switchHabitComplete: (habitId: string) => void;
}

export interface ModalRowProps {
  register: any;
  name: string;
  onDelete: () => void;
}

export interface HabitFormRow {
  name: string;
  id: string;
}

export interface HabitForm {
  habits: HabitFormRow[];
}

export interface ModalContentProps {
  onClose: () => void;
  initialHabits: HabitResponseDto[];
  onSubmit: (
    habits: HabitFormRow[],
    deletedHabitIds: string[],
  ) => Promise<void>;
}
