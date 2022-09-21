import React, { ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../../types'
import { LayoutTemplate } from './LayoutTemplate'
import { SlotConfigType } from './SlotConfigType'
import { SlotItemType } from './SlotItemType'

interface ContainerProps {
  children?: ReactNode,
  customCss?: PrensaEngineCSSProp,
  customProps?: any,
  defaultCss?: PrensaEngineCSSProp
}

interface Container extends ContainerProps { }

interface PageBlockProps extends ContainerProps, LayoutTemplate, SlotConfigType {
  customCss?: {
    container?: PrensaEngineCSSProp,
    columnHolder?: PrensaEngineCSSProp,
    column?: PrensaEngineCSSProp,
    item?: PrensaEngineCSSProp
  },
  customProps?: {
    container?: any,
    columnHolder?: any,
    column?: any,
    item?: any
  },
  className?: string,
  itemComponent?: React.ElementType,
  name?: string,
  teasers?: any,
  template?: string,
  title?: string
}

export {
  Container,
  ContainerProps,
  LayoutTemplate,
  PageBlockProps,
  SlotConfigType,
  SlotItemType
}