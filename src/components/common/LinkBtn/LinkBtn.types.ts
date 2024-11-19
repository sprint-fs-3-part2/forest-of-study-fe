import { ComponentPropsWithoutRef } from 'react';

export interface LinkBtnProps
  extends Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'disabled'> {
  children: string | number;
  className?: string;
}
