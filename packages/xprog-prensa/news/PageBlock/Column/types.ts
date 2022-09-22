import { ElementType } from 'react'

import { PrensaEngineCSSProp } from '../../../types'
import * as t from '../types'

interface ColumnHolderProps extends t.ContainerDefault {
  customCss?: PrensaEngineCSSProp,
  customProps?: t.BlockType
}

interface ColumnStyledProps extends t.ContainerDefault {
  customCss?: PrensaEngineCSSProp,
  customProps?: t.BlockType,
}

interface ColumnProps {
  css?: PrensaEngineCSSProp,
  customProps?: {
    column?: t.BlockType,
  },
  layouts?: any,
  itemComponent: ElementType,
  name?: string,
  slot?: any
}

export {
  ColumnProps,
  ColumnHolderProps,
  ColumnStyledProps
}