'use client';

import { IconTag } from '@/components/common/IconTag';
import { StudyNav } from '@/components/common/StudyNav';
import { getStudyById } from '@/services/study/api/studyApi';
import { GetStudyDto } from '@/services/study/api/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PointIcon from '@/public/icons/point_icon.png';
import { StudyHabitsResponseDto } from '@/lib/types/api/data-contracts';
import { getHabits } from '@/services/habit/api/habitApi';
import { Actions, HabitTable, Reaction } from '@/components/studyPage/index';
import { PasswordModalVariant } from '@/components/studyPage/studyPage.types';
import { Modal } from '@/components/common/Modal';
import { PasswordModalContent } from '@/components/studyPage/PasswordModal';

type ReactionsType = Record<string, number>;

const mockReaction: ReactionsType = {
  '😀': 9,
  '😃': 3,
  '😄': 4,
  '😊': 23,
  '😌': 8,
  '😍': 9,
  '🥰': 5,
  '😋': 3,
  '😎': 3,
  '😞': 3,
  '😔': 5,
  '😰': 12,
  '😥': 2,
  '😓': 3,
  '🤗': 4,
  '🤔': 5,
  '🫣': 6,
  '🤭': 7,
  '🫢': 8,
  '🫡': 9,
};

export default function StudyPage() {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<GetStudyDto>();
  const [habit, setHabit] = useState<StudyHabitsResponseDto>();
  const [displayModal, setDisplayModal] = useState(false);
  const [modalVariant, setModalVariant] = useState<PasswordModalVariant>();

  const openModal = (variant: PasswordModalVariant) => {
    setModalVariant(variant);
    setDisplayModal(true);
  };

  const onCloseModal = () => {
    setDisplayModal(false);
  };

  useEffect(() => {
    const fetchStudy = async () => {
      const data = await getStudyById(id);
      setStudy(data);
    };

    fetchStudy();
  }, [id]);

  useEffect(() => {
    const fetchHabits = async () => {
      const data = await getHabits(study?.id as string);
      setHabit(data);
    };
    study && fetchHabits();
  }, [id, study]);

  return (
    <>
      <Modal isOpen={displayModal}>
        {study && (
          <PasswordModalContent
            nickname={study?.nickname}
            studyName={study?.name}
            variant={modalVariant}
            onClose={onCloseModal}
          />
        )}
      </Modal>
      <div className='h-[889px]'>
        <div className='flex flex-wrap-reverse justify-between items-center mb-[24px] relative gap-y-4'>
          <Reaction reactions={mockReaction} />
          <Actions setVariant={openModal} />
        </div>
        {study && (
          <StudyNav
            nickname={study?.nickname}
            studyName={study?.name}
            setModalVariant={openModal}
          ></StudyNav>
        )}
        <div className='flex flex-col gap-2 mb-6'>
          <span className='font-medium text-gray'>소개</span>
          <span>{study?.intro}</span>
        </div>
        <div className='flex flex-col gap-2 mb-6'>
          <span className='font-medium text-gray'>현재까지 획득한 포인트</span>
          <IconTag
            variant='point'
            icon={PointIcon}
            parentComponent='page'
            fillColor='white'
            text={`P 획득`}
          />
        </div>
        {habit && <HabitTable habitsProps={habit} />}
      </div>
    </>
  );
}
