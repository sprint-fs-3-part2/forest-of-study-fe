import { GetStudyDto } from '@/services/study/api/types';

function isColorBgCard(background: string): boolean {
  const colors = ['green', 'yellow', 'blue', 'pink'];
  return colors.includes(background);
}

export default function StudyCard(study: Readonly<GetStudyDto>) {
  const { name, nickname, intro, background } = study;
  return <article className='rounded border-black'>{name}</article>;
}
