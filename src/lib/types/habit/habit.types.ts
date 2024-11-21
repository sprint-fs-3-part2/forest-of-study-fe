export interface Habit {
  id: string;
  name: string;
  studyId: string;
}

export type HabitWithoutStudyId = Omit<Habit, 'studyId'>;

export interface CompletedHabit {
  id: string;
  completeDate: Date;
  habitId: string;
  studyId: string;
}

export interface TodayHabit {
  id: string;
  name: string;
  complete: boolean;
}
