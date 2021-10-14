import { map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import { EditButtons } from '../EditArea'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps } from './utils'

/**
 * Render Preview component
 * @returns
 */
const RenderPreview = ({
  children,
  enabled,
  text,
  subject
}) => {
  if(!enabled) {
    return children
  }
  // editable refs
  const edition_text = React.useRef(text || '')
  const edition_subject = React.useRef(subject || '')
  const [edition_modified, set_modified] = React.useState(false)
  const [edition_restart, set_restart] = React.useState(false)
  const [edition_saving, set_saving] = React.useState(false)
  // editable reset function
  const resetEditionFields = () => {
    edition_text.current = text
    edition_subject.current = subject
    set_modified(false)
    set_saving(false)
    set_restart(true)
  }
  const submitEditionFields = () => {
    const data = {
      title: edition_text.current,
      subject: edition_subject.current
    }
    set_saving(true)
    setTimeout(() => {
      set_modified(false)
      set_saving(false)
      set_restart(true)
    }, 2000)
  }
  // editable reset effect
  React.useEffect(() => {
    if(edition_restart === true) {
      set_restart(false)
    }
  }, [edition_restart])
  return (
    <>
      {React.cloneElement(children, { 
        editable: {
          enabled: true,
          modified: edition_modified,
          saving: edition_saving,
          set_modified: set_modified,
        },
        states: {
          title: edition_text,
          subject: edition_subject
        }
      })}
      <EditButtons
        action={submitEditionFields}
        enabled={edition_modified}
        reset={resetEditionFields}
      />
    </>
  )
}
/**
 * Render Slot component
 * @returns
 */
const RenderSlot = ({
  color,
  column_items,
  column_padding,
  domain,
  image_circle,
  layout,
  layouts,
  slot,
  theme
}: RenderSlotProps) => {
  const { teasers } = theme
  const column_width = `calc((100% - (${column_padding} * 24px)) / ${column_items})`
  return (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if(!teaser_props)
          return null
        return (
          <Block
            key={key}
            width='100%'
            lg={{ width: column_width }}>
            <RenderPreview
              enabled={true}
              text={item?.name}
              subject={item?.subject}>
              <Teaser
                color={color}
                domain={domain}
                item={item}
                image_circle={image_circle}
                layout={teaser_props.layout}
                related={teaser_props.related}
              />
            </RenderPreview>
          </Block>
        )
      })}
    </React.Fragment>
  )
}

export default withTheme(RenderSlot)