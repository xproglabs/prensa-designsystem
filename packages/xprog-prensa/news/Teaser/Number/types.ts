import { ReactNode } from 'react'

import { PrensaEngineTypeof } from '@xprog/prensa-system'
import { BlockType, CSSType, CSSVariant, ContainerDefaultProps } from '../types'

interface NumberContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface NumberTextProps extends NumberContainerProps {
  variant?: CSSVariant;
}

interface NumberProps extends NumberContainerProps {
  bgColor?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  color?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  css?: CSSType;
  textVariant?: CSSVariant;
  variant?: NumberVariant;
}

type NumberCSSType = CSSType;
type NumberVariant = 'none' | 'default' | 'filled';

export {
  NumberContainerProps,
  NumberCSSType,
  NumberTextProps,
  NumberProps,
  NumberVariant
}