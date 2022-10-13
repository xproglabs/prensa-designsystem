import { ElementType, ReactNode } from 'react'

import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface TitleContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TitleTextProps extends TitleContainerProps {
  variant?: CSSVariant;
}

interface TitleProps extends TitleContainerProps {
  css?: CSSType;
  path?: string;
  title?: string;
  variant?: CSSVariant;
  wrapTitle?: ElementType;
}

type TitleVariant = CSSVariant

export {
  TitleContainerProps,
  TitleTextProps,
  TitleProps,
  TitleVariant
}