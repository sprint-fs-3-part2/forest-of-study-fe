// 습관 기록표

import { useState } from "react";
import { HabitRecord } from "./type";

interface HabitTableProps {
  habits: HabitRecord[];
  onHabitChange: (habits: HabitRecord[]) => void; // 습관 데이터 변경 시 호출되는 함수
}

const HabitTable = ({ habits, onHabitChange } :
  HabitTableProps) => {
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const [editingHabitId, setEditingHabitId] = useState<number | null>(null);
    // 현재 수정 중인 습관의 ID

    // 발바닥 색깔
    const getFootColor = (rowIndex: number, isActive: boolean) => {
      if (!isActive) {
      return {
        filter: `grayscale(100%) opacity(0.5)`,
      };
      }


    // 행 번호에 따라 밝기, 색깔 조절
    const brightness = 100 - (rowIndex * 10);
    const hue = 85; // 초록색 계열
    const saturate = 100 + (rowIndex * 20); // 점점 채도 높아지게

    return {
      filter: `brighness(${brightness}%) hue-rotate(${hue}deg) saturate(${saturate}%)`,
    };
  };

  // 특정 요일의 수행 여부를 토글하는 함수
  const toggleDay = (habitIndex: number, dayIndex: number) => {
    const newHabits = [...habits]; // 습관 데이터 복사
    newHabits[habitIndex].days[dayIndex] = !newHabits[habitIndex].days[dayIndex]; // 해당 요일 상태 변경
    onHabitChange(newHabits); // 변경된 데이터 전달
  };

  // 습관 텍스트 업데이트하는 함수
  const updateHabitText = (habitIndex: number, text: string) => {
    const newHabits = [...habits];
    newHabits[habitIndex].text = text;
    onHabitChange(newHabits);
    setEditingHabitId(null); // 수정 모드 종료
  };

  return (
    <div className="mt-10 p-6 rounded-[20px] border">
      <h2 className="text-black text-2xl font-extrabold">습관 기록표</h2>
    </div>
  )
  }

  export default HabitTable;
