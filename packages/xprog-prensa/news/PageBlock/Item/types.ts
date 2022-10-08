import { TypographyVariantType } from '../../../types'
import { BlockType, ContainerDefaultProps, PageBlockCSSType } from '../types'

export interface ItemDefaultProps {
  name?: string;
  path?: string;
  type?: string;
  numberValue?: string;
}
export interface ItemLabelProps extends ContainerDefaultProps {
  customProps?: BlockType;
  variants?: TypographyVariantType | [ TypographyVariantType, TypographyVariantType ];
}

export interface ItemStyledProps extends ContainerDefaultProps {
  customProps?: BlockType;
}

export interface ItemProps extends ItemDefaultProps, ItemStyledProps {
  css?: PageBlockCSSType;
}