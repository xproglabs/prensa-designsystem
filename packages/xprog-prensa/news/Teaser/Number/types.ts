import { ReactNode } from 'react'

import { PrensaEngineColorType } from '../../../types';
import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface NumberContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface NumberTextProps extends NumberContainerProps {
  variant?: CSSVariant;
}

interface NumberProps extends NumberContainerProps {
  bgColor?: PrensaEngineColorType;
  color?: PrensaEngineColorType;
  css?: CSSType;
  textVariant?: CSSVariant;
  variant?: NumberVariant;
}

type NumberCSSType = CSSType;
type NumberVariant = 'none' | 'default' | 'filled'

export {
  NumberContainerProps,
  NumberCSSType,
  NumberTextProps,
  NumberProps,
  NumberVariant
}