import { FunctionComponent, ReactNode } from 'react'

import { TemplatesType } from '../../providers/LayoutProvider'
import { BlockProps, PrensaEngineColorType, PrensaEngineCSSProp } from '../../types'
import { TeaserProps } from '../Teaser/types'
import { ColumnProps } from './Column/types'
import { ContainerDefaultProps } from './Container/types'
import { ItemDefaultProps } from './Item/types'

export type BlockType = BlockProps;
export type PageBlockCSSType = PrensaEngineCSSProp;
export type SlotConfigType = TeaserProps | [TeaserProps, TeaserProps];
export type SlotItemsType = Array<ItemDefaultProps> | [];

type PageBlockCSSProp = {
  container?: PageBlockCSSType;
  columnHolder?: PageBlockCSSType;
  column?: PageBlockCSSType;
  item?: PageBlockCSSType;
}
type PageBlockCustomProps = {
  className?: string;
  container?: BlockType;
  columnHolder?: BlockType;
  column?: BlockType;
  item?: BlockType;
}

export interface PageBlockConfig {
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
  slotLeftColor?: PrensaEngineColorType;
  slotLeftBgColor?: PrensaEngineColorType;
  slotLeftComponent?: string;
  slotLeftIconValue?: string;
  slotLeftReadMoreEnabled?: boolean;
  slotLeftReadMoreLink?: string;
  slotLeftReadMoreTitle?: string;
  slotLeftTeaserBgColor?: string;
  slotLeftLayout?: string;
  slotLeftItems?: number;
  slotLeftTitleEnabled?: boolean;
  slotLeftTitleLink?: string;
  slotLeftTitleValue?: string;
  slotCenterColor?: PrensaEngineColorType;
  slotCenterBgColor?: PrensaEngineColorType;
  slotCenterComponent?: string;
  slotCenterIconValue?: string;
  slotCenterReadMoreEnabled?: boolean;
  slotCenterReadMoreLink?: string;
  slotCenterReadMoreTitle?: string;
  slotCenterTeaserBgColor?: string;
  slotCenterLayout?: string;
  slotCenterItems?: number;
  slotCenterTitleEnabled?: boolean;
  slotCenterTitleLink?: string;
  slotCenterTitleValue?: string;
  slotRightColor?: PrensaEngineColorType;
  slotRightBgColor?: PrensaEngineColorType;
  slotRightComponent?: string;
  slotRightIconValue?: string;
  slotRightReadMoreEnabled?: boolean;
  slotRightReadMoreLink?: string;
  slotRightReadMoreTitle?: string;
  slotRightTeaserBgColor?: string;
  slotRightLayout?: string;
  slotRightItems?: number;
  slotRightTitleEnabled?: boolean;
  slotRightTitleLink?: string;
  slotRightTitleValue?: string;
  templateBgColor?: PrensaEngineColorType;
}
export type SlotConfigTemplate = {
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
export interface SlotConfigProps extends ColumnProps {
  slotConfig?: {
    [key in TemplatesType]?: {
      slotLeft?: SlotConfigTemplate;
      slotCenter?: SlotConfigTemplate;
      slotRight?: SlotConfigTemplate;
    }
  }
}
export interface PageBlockProps extends ContainerDefaultProps, PageBlockConfig {
  css?: PageBlockCSSProp;
  customProps?: PageBlockCustomProps;
  itemComponent?: FunctionComponent | ReactNode;
  slotLayouts?: Array<SlotConfigProps>;
  teasers?: any;
  templates?: Array<SlotConfigProps>;
}

export * from './Column/types'
export * from './Container/types'
export * from './Item/types'