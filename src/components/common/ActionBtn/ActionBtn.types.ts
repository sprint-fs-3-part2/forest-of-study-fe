import { ComponentPropsWithoutRef } from 'react';
import type { StaticImageData } from 'next/image';

type ActionBtnVariant = 'circle' | 'ellipse';

export interface ActionBtnProps extends ComponentPropsWithoutRef<'button'> {
  variant: ActionBtnVariant;
  icon: StaticImageData | { src: string; height: number; width: number };
}
