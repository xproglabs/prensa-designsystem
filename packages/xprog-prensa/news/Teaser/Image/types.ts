import { ReactNode } from 'react'

import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface ImageContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface ImageTextProps extends ImageContainerProps {
  variant?: CSSVariant;
}

interface ImageProps extends ImageContainerProps {
  css?: CSSType;
  Image?: string;
  variant?: CSSVariant;
}

type ImageVariant = CSSVariant

export {
  ImageContainerProps,
  ImageTextProps,
  ImageProps,
  ImageVariant
}