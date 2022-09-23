import { ElementType } from 'react'

import { TypographyVariantType } from '../../../types'
import * as t from '../types'

interface ItemProps extends ItemDefaultProps, ItemStyled {
  customCss?: t.CSSType,
}

interface ItemDefaultProps {
  name?: string,
  path?: string,
  type?: string
}

interface ItemStyled extends t.ContainerDefault {
  customProps?: t.BlockType
}

interface ItemLabelProps extends t.ContainerDefault {
  customProps?: t.BlockType,
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType]
}

type ItemDefaultType = ElementType

export {
  ItemDefaultProps,
  ItemDefaultType,
  ItemLabelProps,
  ItemProps,
  ItemStyled
}