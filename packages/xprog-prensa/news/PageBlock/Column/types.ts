import { PrensaEngineTypeof } from '@xprog/prensa-system'
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
  color?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  itemComponent?: FunctionComponent | ReactNode;
  items?: SlotItemsType;
  itemsBottom?: SlotItemsType;
  itemsTop?: SlotItemsType;
  layout?: SlotConfigProps;
  name?: string;
  wrapperTop?: { enabled: boolean; component?: (P: Array<any>) => ReactNode | undefined; };
  wrapperContent?: { enabled: boolean; component?: (P: Array<any>) => ReactNode | undefined; };
  wrapperBottom?: { enabled: boolean; component?: (P: Array<any>) => ReactNode | undefined; };
}