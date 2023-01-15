/* eslint-disable no-undef */
import { VariantProps } from '@stitches/react'
import { ReactNode, HTMLProps } from 'react'

import { PrensaEngineColorType, PrensaEngineCSSProp } from '../../types'
import { StyledIconButtonType } from './styles'

type StyledIconButtonVariants = VariantProps<StyledIconButtonType>

type ExtendedProps = Omit<HTMLProps<HTMLButtonElement>, 'size'>

export type IconButtonProps = ExtendedProps & {
  children?: any;
  color?: PrensaEngineColorType;
  css?: { button?: PrensaEngineCSSProp; icon?: PrensaEngineCSSProp; };
  icon?: ReactNode;
  iconColor?: PrensaEngineColorType;
  roundedCorners?: StyledIconButtonVariants['roundedCorners'];
  size?: StyledIconButtonVariants['size'];
  variant?: 'filled' | 'outlined' | 'ghost';
}