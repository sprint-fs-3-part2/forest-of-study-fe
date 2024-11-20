'use client';

import React, { useState } from "react";
import HabitTable from "./HabitTable";
import { useRouter } from "next/navigation";
import { HabitRecord, StudyDetail } from "./type";
import { GNB } from "@/components/layout";
import { LinkBtn } from "@/components/common/LinkBtn";
import { IconTag } from "@/components/common/IconTag";

export default function StudyDetailPage() {

  const router = useRouter;
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [studyDetail, setStudyDetail] = useState<StudyDetail>({
    title: '연우의 개발공장',
    description: '소개를 입력해주세요',
  });

  const [habits, setHabits] = useState<HabitRecord[]>([
    {
      id: 1,
      text: '습관 입력',
      days: Array(7).fill(false),
    },
  ]);


return (
  <div className="bg-background">
    <GNB/>
    <div className="bg-white max-w-screen-lg mx-auto
    h-[56rem] p-10 mt-10 mb-[73px] rounded-[20px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[32px] text-black font-extrabold">{studyDetail.title}</h1>
        <div className="flex flex-row gap-4">
          <LinkBtn>오늘의 집중</LinkBtn>
          <LinkBtn>오늘의 습관</LinkBtn>
        </div>
      </div>
    <div className="mb-6 gap-2">
      <h3 className="text-lg text-gray font-normal">소개</h3>
      <p className="text-lg text-black font-medium">{studyDetail.description}</p>
    </div>
    <div className="gap-2">
      <h3 className="text-lg text-gray font-normal">현재까지 획득한 포인트</h3>

    </div>
    <div className="mt-10">
    <HabitTable
    habits={habits}
    onHabitChange={setHabits}
    />
    </div>
</div>
  </div>
)
}
