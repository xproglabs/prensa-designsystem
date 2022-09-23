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

interface TeaserProps extends TeaserDefaultProps, TeaserStyled {
  customCss?: CSSType,
}

interface TeaserDefaultProps {
  name?: string,
  path?: string,
  type?: string
}

interface TeaserStyled extends ContainerDefault {
  children?: ReactNode,
  customProps?: BlockType
}

interface TeaserLabelProps extends ContainerDefault {
  children?: ReactNode,
  customProps?: BlockType,
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType]
}

type TeaserDefaultType = ElementType

export {
  TeaserDefaultProps,
  TeaserDefaultType,
  TeaserLabelProps,
  TeaserProps,
  TeaserStyled
}