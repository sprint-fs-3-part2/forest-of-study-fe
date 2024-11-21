export interface StudyDetail {
    description: string;
}

export interface HabitRecord {
  id: number; //습관 고유 ID
  text: string; // 습관 내용
  days: boolean[]; // 각 요일별 수행 여부를 나타내는 배열
}
