import { ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../types'
import {
  ColumnProps,
  ColumnHolderProps,
  ColumnStyledProps
} from './Column/types'
import {
  ItemDefaultProps,
  ItemDefaultType,
  ItemLabelProps,
  ItemProps,
  ItemStyled
} from './Item/types'

type BlockType = {
  className?: string
}

type CSSType = PrensaEngineCSSProp

interface ContainerDefaultProps {
  className?: string;
  children?: ReactNode;
  css?: CSSType;
  defaultCss?: CSSType;
}

interface ContainerProps extends ContainerDefaultProps {
  customProps?: BlockType;
}

interface PageBlockProps extends ContainerDefaultProps, PageBlockConfig {
  css?: {
    container?: CSSType;
    columnHolder?: CSSType;
    column?: CSSType;
    item?: CSSType;
  },
  customProps?: {
    className?: string;
    container?: BlockType;
    columnHolder?: BlockType;
    column?: BlockType;
    item?: BlockType;
  },
  itemComponent?: ItemDefaultType;
  slotLayouts?: SlotConfigProps[];
  teasers?: any;
  templates?: SlotConfigProps[];
}

interface PageBlockConfig {
  slotTemplate?: string;
  slotAutoLeftElements?: SlotItemsType;
  slotAutoCenterElements?: SlotItemsType;
  slotAutoRightElements?: SlotItemsType;
  slotManualBottomLeft?: SlotItemsType;
  slotManualBottomCenter?: SlotItemsType;
  slotManualBottomRight?: SlotItemsType;
  slotManualExtra?: SlotItemsType;
  slotManualTopLeft?: SlotItemsType;
  slotManualTopCenter?: SlotItemsType;
  slotManualTopRight?: SlotItemsType;
  slotLeftComponent?: string;
  slotLeftIconValue?: string;
  slotLeftReadMoreEnabled?: boolean;
  slotLeftReadMoreLink?: string;
  slotLeftReadMoreTitle?: string;
  slotLeftTeaserBgColor?: string;
  slotLeftTeaserColor?: string;
  slotLeftLayout?: string;
  slotLeftItems?: number;
  slotLeftTitleEnabled?: boolean;
  slotLeftTitleLink?: string;
  slotLeftTitleValue?: string;
  slotCenterComponent?: string;
  slotCenterIconValue?: string;
  slotCenterReadMoreEnabled?: boolean;
  slotCenterReadMoreLink?: string;
  slotCenterReadMoreTitle?: string;
  slotCenterTeaserBgColor?: string;
  slotCenterTeaserColor?: string;
  slotCenterLayout?: string;
  slotCenterItems?: number;
  slotCenterTitleEnabled?: boolean;
  slotCenterTitleLink?: string;
  slotCenterTitleValue?: string;
  slotRightComponent?: string;
  slotRightIconValue?: string;
  slotRightReadMoreEnabled?: boolean;
  slotRightReadMoreLink?: string;
  slotRightReadMoreTitle?: string;
  slotRightTeaserBgColor?: string;
  slotRightTeaserColor?: string;
  slotRightLayout?: string;
  slotRightItems?: number;
  slotRightTitleEnabled?: boolean;
  slotRightTitleLink?: string;
  slotRightTitleValue?: string;
}

type SlotConfigType = PrensaEngineCSSProp | [PrensaEngineCSSProp, PrensaEngineCSSProp]

interface SlotConfigProps extends ColumnProps {
  default?: SlotConfigType;
  '1'?: SlotConfigType;
  '2'?: SlotConfigType;
  '2:1'?: SlotConfigType;
  '2:2'?: SlotConfigType;
  '3'?: SlotConfigType;
  '3:1'?: SlotConfigType;
  '3:2'?: SlotConfigType;
  '3:3'?: SlotConfigType;
  '4'?: SlotConfigType;
  '4:1'?: SlotConfigType;
  '4:2'?: SlotConfigType;
  '4:3'?: SlotConfigType;
  '4:4'?: SlotConfigType;
  '5'?: SlotConfigType;
  '5:1'?: SlotConfigType;
  '5:2'?: SlotConfigType;
  '5:3'?: SlotConfigType;
  '5:4'?: SlotConfigType;
  '5:5'?: SlotConfigType;
  '6'?: SlotConfigType;
  '6:1'?: SlotConfigType;
  '6:2'?: SlotConfigType;
  '6:3'?: SlotConfigType;
  '6:4'?: SlotConfigType;
  '6:5'?: SlotConfigType;
  '6:6'?: SlotConfigType;
  '7'?: SlotConfigType;
  '7:1'?: SlotConfigType;
  '7:2'?: SlotConfigType;
  '7:3'?: SlotConfigType;
  '7:4'?: SlotConfigType;
  '7:5'?: SlotConfigType;
  '7:6'?: SlotConfigType;
  '7:7'?: SlotConfigType;
  '8'?: SlotConfigType;
  '8:1'?: SlotConfigType;
  '8:2'?: SlotConfigType;
  '8:3'?: SlotConfigType;
  '8:4'?: SlotConfigType;
  '8:5'?: SlotConfigType;
  '8:6'?: SlotConfigType;
  '8:7'?: SlotConfigType;
  '8:8'?: SlotConfigType;
}

type SlotItemsType = ItemDefaultProps[] | []

export {
  BlockType,
  CSSType,
  ColumnProps,
  ColumnHolderProps,
  ColumnStyledProps,
  ContainerDefaultProps,
  ContainerProps,
  ItemDefaultProps,
  ItemDefaultType,
  ItemLabelProps,
  ItemProps,
  ItemStyled,
  PageBlockConfig,
  PageBlockProps,
  SlotConfigProps,
  SlotItemsType,
  SlotConfigType
}