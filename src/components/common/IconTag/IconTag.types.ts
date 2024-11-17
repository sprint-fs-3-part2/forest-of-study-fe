import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IconTagProps {
  variant: 'point' | 'reaction';
  parentComponent: 'card' | 'page';
  fillColor: 'white' | 'black';
  backgroundType?: 'color' | 'image';
  text: string;
  emoji?: string;
  icon?: StaticImport;
  className?: string;
}
