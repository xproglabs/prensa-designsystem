import { get } from 'lodash'
import { cloneElement, ReactElement } from 'react'

export const parseTeaserProps = (key, layout, layouts, slot, teasers) => {
  // select layout from pageblocks
  let related_props = {
    enabled: false,
    items: []
  }
  const slot_len1 = slot.length
  // const slot_position = slot_len1 > 4 ? 0 : slot_len1
  const teaser_position = slot_len1 === 0 ? 0 : key
  let teaser_layout = layout
  let layout_selected = get(layouts, `[${teaser_position}]`, false)
  layout_selected = layout_selected || get(layouts, '[0]', false)

  if (layouts && layout_selected) {
    // handle featured related props
    if (layout_selected.indexOf('related') != -1) {
      const related_list = JSON.parse(JSON.stringify(slot))
      related_list.shift()
      related_props = {
        enabled: true,
        items: related_list
      }
    }
    // check if teaser is hide (featured related scenario)
    if (layout_selected === 'hide') {
      return null
    }
    teaser_layout = teasers[layout_selected]
  }
  return {
    layout: teaser_layout,
    related: related_props
  }
}

/**
 * Render_space function
 * @param component Expects a ReactElement
 * @returns a React cloneElement hook for rendering the component passed as a prop
 */
export const renderSpaceSlot = (component: ReactElement) => {
  if (!component) return null
  return cloneElement(component)
}