import { PrensaEngineTypeof } from '@xprog/prensa-system/types'
import { BlockType, ContainerDefaultProps, PageBlockCSSType } from '../types'

export interface ItemDefaultProps {
  name?: string;
  path?: string;
  type?: string;
  numberValue?: string;
}

type TypographyVariants = keyof PrensaEngineTypeof['config']['theme']['fontSizes']

export interface ItemLabelProps extends ContainerDefaultProps {
  customProps?: BlockType;
  variants?: TypographyVariants | [ TypographyVariants, TypographyVariants ];
}

export interface ItemStyledProps extends ContainerDefaultProps {
  customProps?: BlockType;
}

export interface ItemProps extends ItemDefaultProps, ItemStyledProps {
  css?: PageBlockCSSType;
}