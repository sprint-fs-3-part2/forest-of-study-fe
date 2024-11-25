'use client';

import { ModalRow } from './ModalRow';
import { CommonBtn } from '@/components/common/CommonBtn';
import { PlusButton } from './PlusButton';
import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';
import { HabitForm, ModalContentProps } from '../habitComponent.types';

export const ModalContent = ({
  onClose,
  initialHabits,
  onSubmit: onSubmitProp,
}: ModalContentProps) => {
  const [deletedHabitId, setDeletedHabitId] = useState<string[]>([]);

  const { register, handleSubmit, control } = useForm<HabitForm>({
    defaultValues: {
      habits: (initialHabits.length && initialHabits) || [{ name: '', id: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'habits',
    keyName: 'fieldId',
  });

  const onSubmit = async (data: HabitForm) => {
    try {
      const filteredHabits = data.habits.filter(
        (habit) => habit.name.trim() !== '',
      );
      await onSubmitProp(filteredHabits, deletedHabitId);
    } catch (e) {
      // 에러 핸들링 추가 필요
    }
  };

  const handleRemoveHabit = (index: number, habitId: string) => {
    if (habitId !== '') {
      setDeletedHabitId((prev) => [...prev, habitId]);
    }
    remove(index);
  };

  const handleAddHabit = () => {
    append({ name: '', id: '' });
  };

  return (
    <form
      className='w-full flex flex-col items-center justify-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className='text-[24px] font-extrabold'>습관 목록</span>
      <div className='flex items-center flex-col gap-2 md:gap-5 xl:gap-5 max-h-[488px] md:max-h-[646px] xl:max-h-[646px] overflow-y-scroll my-[24px] relative w-full min-h-[488px] md:min-h-[646px] xl:min-h-[646px]'>
        {fields.map((field, index) => (
          <ModalRow
            key={index}
            register={register}
            name={`habits.${index}.name`}
            onDelete={() => handleRemoveHabit(index, field.id)}
          />
        ))}
        <PlusButton onClick={handleAddHabit} />
      </div>
      <div className='flex w-full gap-6'>
        <CommonBtn
          widthType='half'
          heightType='fixed'
          variant='cancel'
          onClick={onClose}
        >
          취소
        </CommonBtn>
        <CommonBtn
          widthType='half'
          heightType='fixed'
          type='submit'
        >
          수정완료
        </CommonBtn>
      </div>
    </form>
  );
};
