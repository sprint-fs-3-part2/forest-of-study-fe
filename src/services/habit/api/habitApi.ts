import { axiosInstance } from '@/lib/axios/axiosInstance';
import {
  CompletedHabitDto,
  CreateHabitsDto,
  StudyHabitsResponseDto,
  UpdateHabitsDto,
} from '@/lib/types/api/data-contracts';

const HABITS_URL = 'habits';

export const getHabits = async (studyId: string) => {
  const { data } = await axiosInstance.get<StudyHabitsResponseDto>(
    `/${HABITS_URL}/${studyId}`,
  );
  return data;
};

export const createHabits = async (
  studyId: string,
  habits: CreateHabitsDto,
) => {
  const { data } = await axiosInstance.post<StudyHabitsResponseDto>(
    `/${HABITS_URL}/${studyId}`,
    habits,
  );
  return data;
};

export const editHabits = async (studyId: string, habits: UpdateHabitsDto) => {
  const { data } = await axiosInstance.patch(
    `/${HABITS_URL}/${studyId}`,
    habits,
  );
  return data;
};

export const deleteHabit = async (studyId: string, habitId: string) => {
  await axiosInstance.delete(`/${HABITS_URL}/${studyId}/${habitId}`);
};

export const deleteHabits = async (studyId: string, habitIds: string[]) => {
  await Promise.all(habitIds.map((habitId) => deleteHabit(studyId, habitId)));
};

export const completeHabit = async (studyId: string, habitId: string) => {
  const { data } = await axiosInstance.post<CompletedHabitDto>(
    `/${HABITS_URL}/${studyId}/${habitId}/complete`,
  );
  return data;
};

export const deleteCompletedHabit = async (
  studyId: string,
  habitId: string,
) => {
  await axiosInstance.delete(`/${HABITS_URL}/${studyId}/${habitId}/complete`);
};
