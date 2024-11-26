'use client';

import { StudyNav } from '@/components/common/StudyNav';
import * as FocusToday from '@/components/focus/index';
import { getStudyById } from '@/services/study/api/studyApi';
import { GetStudyDto } from '@/services/study/api/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FocusTodayPage = () => {
  const params = usePathname();
  const id = params.split('/')[2];

  const [study, setStudy] = useState<GetStudyDto>();

  useEffect(() => {
    if (!id) return;

    const getStudy = async () => {
      const data = await getStudyById(id);
      setStudy(data);
    };
    getStudy();
  }, [id]);

  if (!study) return null;

  const { nickname, name, points } = study;

  return (
    <>
      <StudyNav
        nickname={nickname}
        studyName={name}
      />
      <FocusToday.Point points={points} />
      <FocusToday.TimerContainer />
    </>
  );
};

export default FocusTodayPage;
