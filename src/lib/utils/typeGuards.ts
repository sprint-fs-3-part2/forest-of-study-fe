import { BgType } from '@/services/study/api/types';

const BG_TYPES = [
  'wall',
  'desk',
  'laptop',
  'plant',
  'green',
  'yellow',
  'blue',
  'pink',
] as const;

export const isBgType = (value: string): value is BgType => {
  return BG_TYPES.includes(value as BgType);
};

export const getBgType = (background: string): BgType => {
  if (isBgType(background)) {
    return background;
  }
  return 'blue'; // 기본값
};
