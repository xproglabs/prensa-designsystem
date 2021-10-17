import { get, map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import { EditWrap } from '../EditArea/styled'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps } from './utils'

/**
 * Render Preview component
 * @returns
 */
const RenderPreview = ({
  children,
  text,
  preview,
  subject
}) => {
  if(!preview || !preview.enabled) {
    return children
  }
  // editable refs
  const ref_text = React.useRef(text || '')
  const ref_subject = React.useRef(subject || '')
  const [modified, set_modified] = React.useState(false)
  const [selected, set_selected] = React.useState(false)
  const [restart, set_restart] = React.useState(false)
  const [saving, set_saving] = React.useState(false)
  // editable reset function
  const resetEditionFields = () => {
    ref_text.current = text
    ref_subject.current = subject
    set_modified(false)
    set_saving(false)
    set_restart(true)
  }
  const submitEditionFields = () => {
    const data = {
      title: ref_text.current,
      subject: ref_subject.current
    }
    set_saving(true)
    // preview.save_action()
    setTimeout(() => {
      set_modified(false)
      set_saving(false)
      set_restart(true)
    }, 2000)
  }
  // editable reset effect
  React.useEffect(() => {
    if(restart === true) {
      set_restart(false)
    }
  }, [restart])
  return (
    <EditWrap
      enabled={modified}
      saving={saving}
      selected={selected}>
      {React.cloneElement(children, { 
        edit_buttons: {
          action: submitEditionFields,
          enabled: modified && !saving,
          reset: resetEditionFields
        },
        editable: {
          enabled: !saving,
          modified: modified,
          saving: saving,
          set_selected: set_selected,
          set_modified: set_modified,
        },
        states: {
          title: ref_text,
          subject: ref_subject
        }
      })}
    </EditWrap>
  )
}
/**
 * Render Slot component
 * @returns
 */
const RenderSlot = ({
  carousel,
  color,
  column_items,
  column_padding,
  domain,
  layout,
  layouts,
  preview,
  slot,
  theme
}: RenderSlotProps) => {
  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  const carousel_enabled = get(carousel, 'enabled', false) 
  const RenderTeaser = () => (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if (!teaser_props) return null
        return (
          <Block
            key={key}
            width='100%'
            lg={{ width: column_width }}>
            <RenderPreview
              preview={preview}
              text={item?.name}
              subject={item?.subject}>
              <Teaser
                color={color}
                domain={domain}
                item={item}
                layout={teaser_props.layout}
                related={teaser_props.related}
              />
            </RenderPreview>
          </Block>
        )
      })}
    </React.Fragment>
  )
  const RenderCarousel = () => (
    <Carousel {...carousel}>
      <RenderTeaser />
    </Carousel>
  )
  if (carousel_enabled) {
    return <RenderCarousel />
  }
  return <RenderTeaser />
}

export default withTheme(RenderSlot)