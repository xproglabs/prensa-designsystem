import { ElementType, ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../../types'

export interface ColumnStyledProps {
  children?: ReactNode,
  customCss?: PrensaEngineCSSProp,
  defaultCss?: PrensaEngineCSSProp,
}

export interface ColumnProps extends ColumnStyledProps {
  customProps?: any,
  layouts?: any,
  Item: ElementType,
  name?: string,
  slot?: any
}

export interface ColumnHolderProps {
  children?: ReactNode,
  customCss?: PrensaEngineCSSProp,
  customProps?: any,
  defaultCss?: PrensaEngineCSSProp
}