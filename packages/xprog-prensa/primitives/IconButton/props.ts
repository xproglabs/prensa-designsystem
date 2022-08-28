import { ReactNode } from 'react'
import { PrensaEngineColorType } from '../../types'
import { StyledIconButtonTypes } from './styles'

export type IconButtonProps = StyledIconButtonTypes['defaultProps'] & {
  color?: PrensaEngineColorType;
  icon?: ReactNode;
  iconColor?: PrensaEngineColorType;
  variant?: 'filled' | 'outlined' | 'ghost';
  viewBox?: string;
}