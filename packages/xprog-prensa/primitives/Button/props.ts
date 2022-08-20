import { ReactNode } from 'react'

import { PrensaColorTokens, PrensaTypeSystemTokens } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaColorTokens;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaColorTokens;
  textVariant?: PrensaTypeSystemTokens;
  variant?: 'filled' | 'outlined' | 'ghost';
}