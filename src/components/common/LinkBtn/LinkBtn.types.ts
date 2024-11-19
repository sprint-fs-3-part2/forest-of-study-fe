import { ComponentPropsWithoutRef } from 'react';

export interface LinkBtnProps
  extends Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'disabled'> {
  children: React.ReactNode;
  className?: string;
  iconSize?: number;
}
