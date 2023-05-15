import { PrensaEngineCSS, PrensaEngineTypeof } from '@xprog/prensa-system/types'
import { ReactNode } from 'react'

import { StyledButtonTypes } from './styles'

export type ButtonCSS = {
  button?: PrensaEngineCSS;
  label?: PrensaEngineCSS;
}

export type ButtonProps = StyledButtonTypes['defaultProps'] & {
  color?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  css?: ButtonCSS;
  labelSpacing?: keyof PrensaEngineTypeof['config']['theme']['space'];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  textColor?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  textVariant?: keyof PrensaEngineTypeof['config']['theme']['fontSizes'];
  variant?: 'filled' | 'outlined' | 'ghost';
}