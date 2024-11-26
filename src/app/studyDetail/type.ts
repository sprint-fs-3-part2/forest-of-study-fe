export interface StudyDetail {
  description: string;
}

// 요일을 나타내는 상수
export const DAYS_IN_WEEK = 7;
// 요일별 타입 정의
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface HabitRecord {
  id: number; //습관 고유 ID
  text: string; // 습관 내용
  days: boolean[];
  // days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
}
