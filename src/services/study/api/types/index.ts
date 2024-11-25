export type BackgroundType =
  | 'blue'
  | 'pink'
  | 'green'
  | 'yellow'
  | 'wall'
  | 'desk'
  | 'laptop'
  | 'plant';

export type GetStudyDto = {
  id: string;
  name: string;
  nickname: string;
  intro: string;
  background: BackgroundType;
};
