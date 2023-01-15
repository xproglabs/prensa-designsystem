import { VariantProps } from '@stitches/react'
import React, { ReactNode } from 'react'

import { PrensaEngineColorType, PrensaEngineCSSProp } from '../../types'
import { StyledIconButtonType } from './styles'

type StyledIconButtonVariants = VariantProps<StyledIconButtonType>

export type IconButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'> & {
  children?: any;
  color?: PrensaEngineColorType;
  css?: { button?: PrensaEngineCSSProp; icon?: PrensaEngineCSSProp; };
  icon?: ReactNode;
  iconColor?: PrensaEngineColorType;
  roundedCorners?: StyledIconButtonVariants['roundedCorners'];
  size?: StyledIconButtonVariants['size'];
  variant?: 'filled' | 'outlined' | 'ghost';
  viewBox?: string;
}