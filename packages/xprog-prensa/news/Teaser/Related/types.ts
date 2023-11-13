import { ReactNode } from 'react'
import { LinkProps } from '../../../primitives/Link/types'

import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps,
  TeaserProps
} from '../types'

interface RelatedContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface RelatedProps extends RelatedContainerProps {
  css?: CSSType;
  items?: TeaserProps[];
  layout?: TeaserProps,
  linkProps?: LinkProps;
}

type RelatedVariant = CSSVariant

export {
  RelatedContainerProps,
  RelatedProps,
  RelatedVariant
}