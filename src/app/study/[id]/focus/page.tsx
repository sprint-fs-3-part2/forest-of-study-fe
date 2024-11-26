'use client';

import { StudyNav } from '@/components/common/StudyNav';
import * as FocusToday from '@/components/focus/index';
import { patchFocusPoint } from '@/services/focus/api/focusApi';
import { getStudyById } from '@/services/study/api/studyApi';
import { GetStudyDto } from '@/services/study/api/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FocusTodayPage = () => {
  const params = usePathname();
  const id = params.split('/')[2];

  const [study, setStudy] = useState<GetStudyDto>();
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    if (!id) return;

    const getStudy = async () => {
      const data = await getStudyById(id);
      setStudy(data);
      setPoints(data.points);
    };
    getStudy();
  }, [id]);

  if (!study) return null;

  const { nickname, name } = study;

  // 포인트 업데이트

  const handlePointsUpdate = async (newPoints: number) => {
    try {
      await patchFocusPoint(id, newPoints);
      setPoints(points + newPoints);
    } catch (error) {
      console.error('포인트 업데이트 실패:', error);
    }
  };

  return (
    <>
      <StudyNav
        nickname={nickname}
        studyName={name}
      />
      <FocusToday.Point points={points} />
      <FocusToday.TimerContainer onPointsUpdate={handlePointsUpdate} />
    </>
  );
};

export default FocusTodayPage;
