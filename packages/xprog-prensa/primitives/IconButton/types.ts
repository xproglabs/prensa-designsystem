import { VariantProps } from '@stitches/react'
import { ReactNode, HTMLAttributes } from 'react'

import { PrensaEngineColorType, PrensaEngineCSSProp } from '../../types'
import { StyledIconButtonType } from './styles'

type StyledIconButtonVariants = VariantProps<StyledIconButtonType>

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: PrensaEngineColorType;
  css?: { button?: PrensaEngineCSSProp; icon?: PrensaEngineCSSProp; };
  icon?: ReactNode;
  iconColor?: PrensaEngineColorType;
  roundedCorners?: StyledIconButtonVariants['roundedCorners'];
  size?: StyledIconButtonVariants['size'];
  variant?: 'filled' | 'outlined' | 'ghost';
  viewBox?: string;
}