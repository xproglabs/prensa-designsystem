import { first, get, isArray, last } from 'lodash'

const getColumnItemLayout = (layout, position, size) => {
  const defaultLayout = get(layout, 'default')
  const defaultBySize = get(layout, `[${size}]`)
  const defaultByNumber = get(layout, `[${size}:${position + 1}]`)
  return defaultByNumber || defaultBySize || defaultLayout
}

const getResponsiveStyle = (variants) => isArray(variants) ? {
  '@initial': first(variants),
  '@lg': last(variants)
} : variants

export { getColumnItemLayout, getResponsiveStyle }
