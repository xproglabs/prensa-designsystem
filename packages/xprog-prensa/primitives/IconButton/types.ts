/* eslint-disable no-undef */
import { VariantProps } from '@stitches/react'
import { PrensaEngineCSS, PrensaEngineTypeof } from '@xprog/prensa-system'
import { ReactNode, HTMLProps } from 'react'

import { StyledIconButtonType } from './styles'

type StyledIconButtonVariants = VariantProps<StyledIconButtonType>

type ExtendedProps = Omit<HTMLProps<HTMLButtonElement>, 'size'>

export type IconButtonCSS = {
  button?: PrensaEngineCSS;
  icon?: PrensaEngineCSS;
}

export type IconButtonProps = ExtendedProps & {
  children?: any;
  color?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  css?: IconButtonCSS;
  icon?: ReactNode;
  iconColor?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  roundedCorners?: StyledIconButtonVariants['roundedCorners'];
  size?: StyledIconButtonVariants['size'];
  variant?: 'filled' | 'outlined' | 'ghost';
}