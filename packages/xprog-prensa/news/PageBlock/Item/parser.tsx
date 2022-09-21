import { first, get, isArray, last } from 'lodash'

// const getConfigForSlot = ({ slotConfig, slotPosition }) => {
//   const slots = []
//   slots.push(get(slotConfig, 'slotLeftTeaserValue'))
//   slots.push(get(slotConfig, 'slotCenterTeaserValue'))
//   slots.push(get(slotConfig, 'slotRightTeaserValue'))
//   return get(slots, `[${slotPosition}]`)
// }

const getTemplateForTeaser = (position, layouts, size) => {
  const defaultLayout = get(layouts, 'default')
  const defaultBySize = get(layouts, `[${size}]`)
  const defaultByNumber = get(layouts, `[${size}:${position + 1}]`)
  return defaultByNumber || defaultBySize || defaultLayout
}

const parseVariants = (variants) => isArray(variants) ? {
  '@initial': first(variants),
  '@lg': last(variants)
} : variants

export { getTemplateForTeaser, parseVariants }
