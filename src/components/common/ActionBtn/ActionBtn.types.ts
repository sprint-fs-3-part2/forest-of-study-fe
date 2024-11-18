import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ComponentPropsWithoutRef } from 'react';

type ActionBtnVariant = 'circle' | 'ellipse';

export interface ActionBtnProps extends ComponentPropsWithoutRef<'button'> {
  variant: ActionBtnVariant;
  icon: StaticImport;
}
