// 습관 기록표

import React, { useState } from 'react';
import { HabitRecord } from './type';
import Image from 'next/image';

interface HabitTableProps {
  habits: HabitRecord[];
  onHabitChange: (habits: HabitRecord[]) => void; // 습관 데이터 변경 시 호출되는 함수
}

const TOTAL_ROWS = 6;

const HabitTable = ({ habits, onHabitChange }: HabitTableProps) => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  // 현재 수정 중인 습관의 ID
  const [editingHabitId, setEditingHabitId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  // 발바닥 색깔
  const getFootColor = (dayIndex: number) => {
    const baseHue = 85; // 초록색 계열의 기본 색조
    const saturationStep = 15; // 각 열마다 증가할 채도
    const baseSaturation = 60; // 기본 채도

    return {
      filter: `hue-rotate(${baseHue}deg) saturate(${baseSaturation + dayIndex * saturationStep}%)`,
    };
  };

  // 특정 요일의 수행 여부를 토글하는 함수
  const toggleDay = (habitIndex: number, dayIndex: number) => {
    const newHabits = [...habits]; // 습관 데이터 복사
    newHabits[habitIndex].days[dayIndex] =
      !newHabits[habitIndex].days[dayIndex]; // 해당 요일 상태 변경
    onHabitChange(newHabits); // 변경된 데이터 전달
  };

  // 수정 모드 시작 시 현재 텍스트를 상태에 저장
  const startEditing = (habit: HabitRecord) => {
    setEditingHabitId(habit.id);
    setEditingText(habit.text);
  };

  // 습관 텍스트 업데이트
  const updateHabitText = (habitIndex: number) => {
    const newHabits = [...habits];
    newHabits[habitIndex].text = editingText;
    onHabitChange(newHabits);
    setEditingHabitId(null); // 수정 모드 종료
  };

  // 빈 데이터 초기화
  const initializeRows = () => {
    const rows = [...habits];
    while (rows.length < TOTAL_ROWS) {
      rows.push({
        id: rows.length + 1,
        text: '',
        days: Array(7).fill(false),
      });
    }
    return rows;
  };

  const fixedHabits = initializeRows();

  // -------------------------------------------------------
  return (
    <div className='mt-10 p-6 rounded-[20px] border'>
      <h2 className='text-black text-2xl font-extrabold mb-6'>습관 기록표</h2>
      <div
        className='grid'
        style={{
          gridTemplateColumns: '246px repeat(7, 1fr)',
          height: '410px',
          gridTemplateRows: 'auto repeat(6, 1fr)',
          gap: '1rem',
        }}
      >
        {/* 요일 헤더 */}
        <div></div>
        {days.map((day) => (
          <div
            key={day}
            className='text-center text-lg text-gray font-normal'
          >
            {day}
          </div>
        ))}

        {/* 습관 데이터 출력 */}
        {fixedHabits.map((habit, habitIndex) => (
          <React.Fragment key={habit.id}>
            {/* 습관 텍스트 입력 영역 */}
            <div className='text-right font-bold text-lg'>
              {editingHabitId === habit.id ? (
                <input
                  type='text'
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => updateHabitText(habitIndex)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      updateHabitText(habitIndex);
                    }
                  }}
                  placeholder='15자 이내로 입력해주세요'
                  className='w-full p-1 text-right h-9 border rounded placeholder-gray-light'
                  autoFocus
                />
              ) : (
                <div
                  onClick={() => startEditing(habit)}
                  className='cursor-pointer p-1 rounded text-gray-light'
                >
                  {habit.text || '여기에 입력해주세요'}
                </div>
              )}
            </div>

            {/* 요일별 수행 상태 체크 */}
            {habit.days.map((isActive, dayIndex) => (
              <div
                key={dayIndex}
                className='flex justify-center'
              >
                <button
                  onClick={() => toggleDay(habitIndex, dayIndex)}
                  className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200'
                  style={getFootColor(dayIndex)}
                >
                  <Image
                    src='/icons/ic_bg_selected.png'
                    alt={`${days[dayIndex]}요일 습관 체크 아이콘`}
                    width={36}
                    height={36}
                  />
                </button>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default HabitTable;
