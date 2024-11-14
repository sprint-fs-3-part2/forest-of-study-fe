import { ComponentPropsWithoutRef } from 'react';

type CommonBtnVariant = 'confirm' | 'cancel';

type CommonBtnWidthType = 'full' | 'half' | 'dynamic';

type CommonBtnHeightType = 'fixed' | 'dynamic';

export interface CommonBtnProps extends ComponentPropsWithoutRef<'button'> {
  variant?: CommonBtnVariant;
  widthType: CommonBtnWidthType;
  heightType: CommonBtnHeightType;
}
