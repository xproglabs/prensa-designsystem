import { get } from 'lodash'
import { cloneElement, ReactElement } from 'react'

export const parseTeaserProps = (key, layout, layouts, slot, teasers) => {
  // select layout from pageblocks
  let related_props = {
    enabled: false,
    items: []
  }
  let teaser_layout = layout
  let layout_selected = get(layouts, `[${key}]`, false)
  if (layouts && layout_selected) {
    // handle featured related props
    if (layout_selected === 'featured_related') {
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