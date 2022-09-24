import { ReactNode } from 'react'

import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface SubtitleContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface SubtitleTextProps extends SubtitleContainerProps {
  variant?: SubtitleVariant;
}

interface SubtitleProps extends SubtitleContainerProps {
  css?: CSSType;
  subtitle?: string;
  variant?: SubtitleVariant;
}

type SubtitleVariant = CSSVariant

export {
  SubtitleContainerProps,
  SubtitleTextProps,
  SubtitleProps,
  SubtitleVariant
}