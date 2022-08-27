import { ReactNode } from 'react'

import { PrensaEngineColorType, PrensaEngineTypeSystemType, PrensaEngineSpaceType } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaEngineColorType;
  css?: { button?: {}; label?: {}; };
  labelSpacing?: PrensaEngineSpaceType;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaEngineColorType;
  textVariant?: PrensaEngineTypeSystemType;
  variant?: 'filled' | 'outlined' | 'ghost';
}