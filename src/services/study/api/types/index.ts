import { ReactNode } from 'react';

export type ColorBgType = 'blue' | 'pink' | 'green' | 'yellow';
export type ImgBgType = 'wall' | 'desk' | 'laptop' | 'plant';

export type BgType = ColorBgType | ImgBgType;

export type StudyQueryType = {
  page?: number;
  skip?: number;
  take?: number;
  orderBy?: 'createdAt' | 'points';
  order?: 'asc' | 'desc';
};

export type GetStudyDto = {
  id: string;
  name: string;
  nickname: string;
  intro: string;
  background: BgType;
  createdAt: string;
};

export interface DropdownOption {
  label: string;
  orderBy: string;
  order: 'asc' | 'desc';
}
export interface StudyCardListProps {
  children: ReactNode;
}
