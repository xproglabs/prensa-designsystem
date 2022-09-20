import { PrensaEngineCSSProp } from '../../../types'
import { LayoutTypes } from './LayoutTypes'

interface LayoutTemplate {
  columns?: LayoutTypes[]
  slots?: any
}

export { LayoutTemplate }