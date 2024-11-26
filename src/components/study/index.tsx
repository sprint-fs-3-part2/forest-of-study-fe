import type { FC } from 'react';

import type { GetStudyDto } from '@/services/study/api/types';

import StudyCard from './card/StudyCard';
import StudySearchInput from './controls/StudySearchInput';
import StudySortDropdown from './controls/StudySortDropdown';
import StudyGrid from './layout/StudyGrid';
import StudyGridSkeleton from './layout/StudyGridSkeleton';
import StudyListContainer from './layout/StudyListContainer';
import RecentStudy from './page/RecentStudy';
import StudyExplorer from './page/StudyExplorer';

export interface StudyNamespace {
  Explorer: typeof StudyExplorer;
  Recent: typeof RecentStudy;
  Grid: typeof StudyGrid;
  GridSkeleton: typeof StudyGridSkeleton;
  ListContainer: typeof StudyListContainer;
  Card: FC<GetStudyDto>;
  SortDropdown: typeof StudySortDropdown;
  SearchInput: typeof StudySearchInput;
}

export const Study: StudyNamespace = {
  Explorer: StudyExplorer,
  Recent: RecentStudy,
  Grid: StudyGrid,
  GridSkeleton: StudyGridSkeleton,
  ListContainer: StudyListContainer,
  Card: StudyCard,
  SortDropdown: StudySortDropdown,
  SearchInput: StudySearchInput,
} as const;
