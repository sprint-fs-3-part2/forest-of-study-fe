export type ColorBgType = 'blue' | 'pink' | 'green' | 'yellow';
export type ImgBgType = 'wall' | 'desk' | 'laptop' | 'plant';

export type BgType = ColorBgType | ImgBgType;

export type GetStudyDto = {
  id: string;
  name: string;
  nickname: string;
  intro: string;
  background: BgType;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
};
