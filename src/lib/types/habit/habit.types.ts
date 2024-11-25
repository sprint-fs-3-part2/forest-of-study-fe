export interface Habit {
  id: string;
  name: string;
  completedHabitsThisWeek: CompletedHabit[];
  completedToday: boolean;
}

export interface CompletedHabit {
  id: string;
  completeAt: Date;
  habitId: string;
  studyId: string;
}

export interface TodayHabit {
  id: string;
  name: string;
  complete: boolean;
}
