import { ElementType, ReactNode } from 'react'

import {
  BlockType,
  CSSType,
  ContainerDefaultProps
} from '../types'

interface ImageObjectProps {
  alt?: string;
  byline?: string;
  url?: string
}

interface ImageContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface ImageWrapProps extends ImageContainerProps {
  image?: ImageObjectProps;
  wrapImage?: ElementType;
}

interface ImageProps extends ImageContainerProps {
  alt?: string;
  css?: CSSType;
  derivative?: ImageDerivative,
  image?: ImageObjectProps;
  wrapImage?: ElementType;
}

type ImageDerivative = '1x1' | '2x1' | '3x1' | '3x2' | '1x2' | '1x3' | '2x3'

type ImageVariant = 'top' | 'right' | 'bottom' | 'left' | 'background'

export {
  ImageContainerProps,
  ImageDerivative,
  ImageWrapProps,
  ImageObjectProps,
  ImageProps,
  ImageVariant
}