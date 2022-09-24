import { ElementType, ReactNode } from 'react'

import {
  PrensaEngineCSSProp,
  TypographyVariantType
} from '../../types'

type CSSType = PrensaEngineCSSProp

interface BlockType {
  className?: string
}

interface ContainerDefault {
  className?: string,
  css?: CSSType,
  defaultCss?: CSSType
}

interface TeaserDefaultProps {
  name?: string,
  path?: string,
  type?: string
}

type TeaserDefaultType = ElementType

interface TeaserLabelProps extends ContainerDefault {
  children?: ReactNode,
  customProps?: BlockType,
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType]
}

interface TeaserProps extends TeaserDefaultProps, TeaserStyledProps {
  css?: CSSType,
}

interface TeaserStyledProps extends ContainerDefault {
  children?: ReactNode,
  customProps?: BlockType
}


export {
  TeaserDefaultProps,
  TeaserDefaultType,
  TeaserLabelProps,
  TeaserProps,
  TeaserStyledProps
}