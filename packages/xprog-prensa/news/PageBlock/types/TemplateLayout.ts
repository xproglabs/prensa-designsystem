import { PrensaEngineCSSProp } from '../../../types'
import { LayoutTypes } from './LayoutTypes'

interface TemplateLayout {
  customCss?: {
    container?: PrensaEngineCSSProp,
    columnHolder?: PrensaEngineCSSProp,
    column?: PrensaEngineCSSProp
  },
  customProps?: {
    container?: any,
    columnHolder?: any,
    column?: any
  },
  layouts?: LayoutTypes[],
  templates?: LayoutTypes[],
  slots?: any
}

export { TemplateLayout }