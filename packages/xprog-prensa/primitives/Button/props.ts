import { ReactNode } from 'react'

import { PrensaEngineColorType, PrensaEngineSpaceType, TypographyVariantType } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaEngineColorType;
  css?: { button?: {}; label?: {}; };
  labelSpacing?: PrensaEngineSpaceType;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaEngineColorType;
  textVariant?: TypographyVariantType;
  variant?: 'filled' | 'outlined' | 'ghost';
}