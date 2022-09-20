import React, { ReactNode } from 'react'
import { TypographyVariantType } from '../../../types'
import { PrensaEngineCSSProp } from '../../../types'
import { LayoutTemplate } from './LayoutTemplate'
import { SlotConfigType } from './SlotConfigType'
import { SlotItemType } from './SlotItemType'

interface ContainerProps {
  children?: ReactNode
  customCss?: PrensaEngineCSSProp
  customProps?: any
  defaultCss?: PrensaEngineCSSProp
}

interface Column extends ContainerProps {}
interface ColumnHolder extends ContainerProps {}
interface Container extends ContainerProps {}
interface ItemProps extends ContainerProps {
  children?: any
  className?: string
  // hideInDesktop?: boolean
  // hideInMobile?: boolean
  name: string
  path: string
}

interface ItemLabelProps {
  children?: ReactNode
  customCss?: any
  defaultCss?: any
  name: string
  path: string,
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType]
}

interface PageBlockProps extends ContainerProps, LayoutTemplate, SlotConfigType {
  customCss?: {
    container?: PrensaEngineCSSProp
    columnHolder?: PrensaEngineCSSProp
    item?: PrensaEngineCSSProp
  }
  customProps?: {
    column?: any
    columnHolder?: any
    container?: any
    item?: any
  }
  className?: string
  itemComponent?: React.ElementType
  layouts: {}
  name?: string
  teasers?: any
  template?: string
  title?: string
}

export {
  Column,
  ColumnHolder,
  Container,
  ContainerProps,
  ItemLabelProps,
  ItemProps,
  LayoutTemplate,
  PageBlockProps,
  SlotConfigType,
  SlotItemType
}