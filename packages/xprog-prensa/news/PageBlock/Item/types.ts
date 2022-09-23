import { ElementType } from 'react'

import { TypographyVariantType } from '../../../types'
import * as t from '../types'

interface ItemDefaultProps {
  name?: string;
  path?: string;
  type?: string;
}

type ItemDefaultType = ElementType

interface ItemLabelProps extends t.ContainerDefaultProps {
  customProps?: t.BlockType;
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType];
}

interface ItemProps extends ItemDefaultProps, ItemStyled {
  css?: t.CSSType;
}

interface ItemStyled extends t.ContainerDefaultProps {
  customProps?: t.BlockType;
}

export {
  ItemDefaultProps,
  ItemDefaultType,
  ItemLabelProps,
  ItemProps,
  ItemStyled
}