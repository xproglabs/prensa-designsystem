import { ReactNode } from 'react'

import {
  BlockType,
  CSSType,
  ContainerDefaultProps
} from '../types'

interface ImageContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface ImageFileProps extends ImageContainerProps {
  alt?: string;
  src?: string;
}

interface ImageProps extends ImageContainerProps {
  alt?: string;
  css?: CSSType;
  derivative?: ImageDerivative,
  image?: string;
}

type ImageDerivative = '1x1' | '2x1' | '3x1' | '3x2' | '1x2' | '1x3' | '2x3'

type ImageVariant = 'top' | 'right' | 'bottom' | 'left' | 'background'

export {
  ImageContainerProps,
  ImageDerivative,
  ImageFileProps,
  ImageProps,
  ImageVariant
}