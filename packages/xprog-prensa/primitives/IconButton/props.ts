import { ReactNode } from 'react'
import { PrensaColorTokens } from '../../types'
import { StyledIconButtonTypes } from './styles'

export type IconButtonProps = StyledIconButtonTypes['defaultProps'] & {
  color?: PrensaColorTokens;
  icon?: ReactNode;
  iconColor?: PrensaColorTokens;
  variant?: 'filled' | 'outlined' | 'ghost';
  viewBox?: string;
}