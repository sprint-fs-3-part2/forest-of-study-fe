import type { StaticImageData } from 'next/image';

export interface IconTagProps {
  variant: 'point' | 'reaction';
  parentComponent: 'card' | 'page';
  fillColor: 'white' | 'black';
  backgroundType?: 'color' | 'image';
  text: string;
  icon:
    | StaticImageData
    | { src: string; width: number; height: number }
    | string;
  className?: string;
}
