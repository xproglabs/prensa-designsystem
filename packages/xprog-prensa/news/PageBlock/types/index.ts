import { ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../../types'
import * as ColumnTypes from '../Column/types'
import * as ItemTypes from '../Item/types'
import { SlotLayoutConfig } from './SlotLayoutConfig'
import { SlotItemsType, TemplateConfig } from './TemplateConfig'

type CSSType = PrensaEngineCSSProp

interface BlockType {
  className?: string
}

interface ContainerDefault {
  className?: string,
  children?: ReactNode,
  css?: CSSType,
  defaultCss?: CSSType
}

interface ContainerProps extends ContainerDefault {
  customProps?: BlockType
}

interface TemplateProps extends ContainerDefault, TemplateConfig {
  customCss?: {
    container?: CSSType,
    columnHolder?: CSSType,
    column?: CSSType,
    item?: CSSType
  },
  customProps?: {
    className?: string,
    container?: BlockType,
    columnHolder?: BlockType,
    column?: BlockType,
    item?: BlockType
  },
  itemComponent?: ItemTypes.ItemDefaultType,
  slotLayouts?: SlotLayoutConfig[],
  teasers?: any,
  templates?: SlotLayoutConfig[]
}

export {
  BlockType,
  ColumnTypes,
  CSSType,
  ContainerDefault,
  ContainerProps,
  ItemTypes,
  SlotLayoutConfig,
  SlotItemsType,
  TemplateConfig,
  TemplateProps
}