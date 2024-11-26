import { PasswordModalVariant } from '@/components/studyPage/studyPage.types';

export interface StudyNavProps {
  nickname: string;
  studyName: string;
  setModalVariant?: (variant: PasswordModalVariant) => void;
}
