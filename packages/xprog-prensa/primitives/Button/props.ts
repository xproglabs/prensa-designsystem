import { ReactNode } from 'react'

import { PrensaColorTokens, PrensaTypeSystemTokens, PrensaSpaceTokens } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaColorTokens;
  css?: { button: {}; label: {}; };
  labelSpacing?: PrensaSpaceTokens;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaColorTokens;
  textVariant?: PrensaTypeSystemTokens;
  variant?: 'filled' | 'outlined' | 'ghost';
}