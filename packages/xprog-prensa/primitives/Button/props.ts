import { ReactNode } from 'react'
import { PrensaColorTokens } from '../../types'
import { StyledButtonTypes } from './styles'

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: PrensaColorTokens;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: PrensaColorTokens;
  variant?: 'filled' | 'outlined' | 'ghost';
  roundedCorners?: boolean;
}