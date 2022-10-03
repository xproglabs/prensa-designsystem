import { FunctionComponent, ReactNode } from 'react'

import { ContainerDefaultProps } from '../Container/types'
import { BlockType, PageBlockCSSType, SlotConfigProps, SlotItemsType } from '../types'

export type ColumnCSSProp = {
  column?: PageBlockCSSType;
  item?: PageBlockCSSType;
}
export type ColumnCustomPropsProp = {
  column?: BlockType;
  item?: BlockType;
}
export interface ColumnHolderProps extends ContainerDefaultProps {
  css?: PageBlockCSSType;
  customProps?: BlockType;
}
export interface ColumnStyledProps extends ContainerDefaultProps {
  css?: PageBlockCSSType;
  customProps?: BlockType;
}
export interface ColumnProps {
  css?: ColumnCSSProp,
  customProps?: ColumnCustomPropsProp,
  itemComponent?: FunctionComponent | ReactNode;
  items?: SlotItemsType;
  layout?: SlotConfigProps;
  name?: string;
}