import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';

type IconTagVariant = 'point' | 'reaction' | 'addReaction';
type IconTagParentComponent = 'page' | 'card';
type IconTagParentBackground = 'photo' | 'color';
type IconTagOnClick = () => void;

export interface IconTagProps2 {
  variant: IconTagVariant;
  parentComponent: IconTagParentComponent;
  parentBackground?: IconTagParentBackground;
  onClick?: IconTagOnClick;
  point?: number;
  reaction?: string;
  reactionCount?: number;
}

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
