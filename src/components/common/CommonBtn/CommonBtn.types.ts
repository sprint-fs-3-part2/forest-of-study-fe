import { ComponentPropsWithoutRef } from 'react';

type CommonBtnVariant = 'submit' | 'cancel';

type CommonBtnWidth = 'full' | 'half' | 'dynamic';

type CommonBtnHeight = 'fixed' | 'dynamic';

export interface CommonBtnProps extends ComponentPropsWithoutRef<'button'> {
  variant: CommonBtnVariant;
  width: CommonBtnWidth;
  height: CommonBtnHeight;
}
