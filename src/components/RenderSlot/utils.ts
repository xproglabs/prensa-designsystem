export const parseTeaserProps = (key, layout, layouts, slot, teasers) => {
  // select layout from pageblocks
  let related_props = {}
  let teaser_layout = layout
  if(layouts && layouts[key]) {
    // handle featured related props
    if(layouts[key] === 'featured_related') {
      const related_list = slot
      related_list.shift()
      related_props = {
        enabled: true,
        items: related_list
      }
    }
    // check if teaser is hide (featured related scenario)
    if(layouts[key] === 'hide') {
      return null
    }
    teaser_layout = teasers[layouts[key]]
  }
  return {
    layout: teaser_layout,
    related: related_props
  }
}