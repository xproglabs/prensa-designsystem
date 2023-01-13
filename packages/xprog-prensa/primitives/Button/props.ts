import { ReactNode } from 'react'

import { PrensaEngineCSSProp, PrensaEngineColorType, PrensaEngineSpaceType, TypographyVariantType } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaEngineColorType;
  css?: { button?: PrensaEngineCSSProp; label?: PrensaEngineCSSProp; };
  labelSpacing?: PrensaEngineSpaceType;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaEngineColorType;
  textVariant?: TypographyVariantType;
  variant?: 'filled' | 'outlined' | 'ghost';
}