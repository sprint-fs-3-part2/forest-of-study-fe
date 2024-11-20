// 습관 기록표

import { useState } from "react";
import { HabitRecord } from "./type";
import Image from "next/image";

interface HabitTableProps {
  habits: HabitRecord[];
  onHabitChange: (habits: HabitRecord[]) => void; // 습관 데이터 변경 시 호출되는 함수
}

const TOTAL_ROWS = 6;

const HabitTable = ({ habits, onHabitChange } :
  HabitTableProps) => {
    const days = ['월', '화', '수', '목', '금', '토', '일'];

    // 현재 수정 중인 습관의 ID
    const [editingHabitId, setEditingHabitId] = useState<number | null>(null);

    const [editingText, setEditingText] = useState<string>("");

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

  // 수정 모드 시작 시 현재 텍스트를 상태에 저장
const startEditing = (habit: HabitRecord) => {
  setEditingHabitId(habit.id);
  setEditingText(habit.text);
};

  // 습관 텍스트 업데이트하는 함수
  const updateHabitText = (habitIndex: number) => {
    const newHabits = [...habits];
    newHabits[habitIndex].text = editingText;
    onHabitChange(newHabits);
    setEditingHabitId(null); // 수정 모드 종료
  };

  const emptyRows = Array(Math.max(0, TOTAL_ROWS - habits.length)).fill(null);

  // -------------------------------------------------------
  return (
    <div className="mt-10 p-6 rounded-[20px] border">
      <h2 className="text-black text-2xl font-extrabold">습관 기록표</h2>
      <div className="grid grid-cols-8 gap-4">
      {/* 요일 헤더 */}
        <div className="col-span-1"></div>
        {days.map((day) => (
          <div key={day} className="text-center text-lg text-gray font-normal">{day}
          </div>
        ))}

        {/* 습관 데이터 출력 */}
        {habits.map((habit, habitIndex) => (
          <div key={habit.id} className="col-span-8 grid grid-cols-8 gap-4 items-center">
            <div className="col-span-1">
              {editingHabitId === habit.id ? (
                <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={() => updateHabitText(habitIndex)}
                onKeyDown={(e) => {
                  if(e.key === 'Enter') {
                    updateHabitText(habitIndex);
                  }
                }}
                placeholder="습관 입력하기 //몇자이내 적기"
                className="w-full p-1 border-none"
                autoFocus
                />
              ) : (
                <div
                onClick={() => startEditing(habit)}
                className="cursor-pointer p-1 rounded" >
                  {habit.text}
                </div>
              )}
            </div>

            {/* 요일별 수행 상태 체크 */}
            {habit.days.map((isActive, dayIndex) => (
              <div
              key={dayIndex}
              className="flex justify-center" >
                <button
                onClick={() => toggleDay(habitIndex, dayIndex)}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                style={getFootColor(habitIndex, isActive) }
                >
                <Image
                src="/icons/ic_bg_selected.png"
                alt="select-foot-icon"
                width={36}
                height={36}
                />
                </button>
                </div>
            ))}
            </div>
        ))}

        {/* 빈행 추가 */}
        {emptyRows.map((_, index) => (
          <div key={`empty-${index}`} className="col-span-8 grid grid-cols-8 gap-4 items-center">
            <div className="col-span-1">
              <div className="p-1">-</div>
              </div>
              {Array(7).fill(null).map((_, dayIndex) => (
                <div key={dayIndex} className="flex justify-center">
                <button
                className="w-9 h-9 flex items-center justify-center rounded-full"
                disabled
                >
                <Image
                src="/icons/ic_bg_selected.png"
                alt="select-foot-icon"
                width={36}
                height={36}
                />
                </button>
                </div>

              ))}
            </div>
        ))}

      </div>
    </div>
  );
  }

  export default HabitTable;
