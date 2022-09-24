import { ReactNode } from 'react'

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

interface TitleStyledProps extends TitleContainerProps {
  variant?: CSSVariant | [CSSVariant, CSSVariant];
}

interface TitleProps extends TitleContainerProps {
  css?: CSSType;
  title?: string;
  variant?: CSSVariant;
}

export {
  TitleContainerProps,
  TitleStyledProps,
  TitleProps
}