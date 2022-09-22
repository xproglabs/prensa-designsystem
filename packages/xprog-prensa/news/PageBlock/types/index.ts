import { ReactNode, ElementType } from 'react'

import { PrensaEngineCSSProp } from '../../../types'
import * as ColumnTypes from '../Column/types'
import { LayoutTypes } from './LayoutTypes'
import { TemplateConfig } from './TemplateConfig'

interface BlockProps {
  className?: string
}

interface ContainerDefault {
  className?: string,
  children?: ReactNode,
  css?: PrensaEngineCSSProp,
  defaultCss?: PrensaEngineCSSProp
}

interface ContainerProps extends ContainerDefault {
  customProps?: BlockProps
}

interface TemplateProps extends ContainerDefault, TemplateConfig {
  customCss?: {
    container?: PrensaEngineCSSProp,
    columnHolder?: PrensaEngineCSSProp,
    column?: PrensaEngineCSSProp,
    item?: PrensaEngineCSSProp
  },
  customProps?: {
    container?: BlockProps,
    columnHolder?: BlockProps,
    column?: BlockProps,
    item?: BlockProps
  },
  itemComponent?: ElementType,
  layouts?: LayoutTypes[],
  teasers?: any,
  templates?: LayoutTypes[]
}

export {
  ColumnTypes,
  BlockProps as BlockType,
  PrensaEngineCSSProp as CSSType,
  ContainerDefault,
  ContainerProps,
  TemplateConfig,
  TemplateProps
}