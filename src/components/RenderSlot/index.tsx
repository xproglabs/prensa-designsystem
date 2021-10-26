import { get, map } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Carousel from '../Carousel'
import { PreviewProvider } from '../PreviewProvider'
import Teaser from '../Teaser'
import { RenderSlotProps } from './types'
import { parseTeaserProps } from './utils'

/**
 * Render Slot component
 */
const RenderSlot = ({
  amp,
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

  const RenderTeasers = () => (
    <React.Fragment>
      {map(slot, (item, key: number) => {
        let teaser_props = parseTeaserProps(key, layout, layouts, slot, teasers)
        if (!teaser_props) return null
        const teaser_number = key + 1
        return (
          <Block
            key={key}
            custom='align-self: flex-start;'
            mb={2}
            width='100%'
            lg={{ mb: 3, width: column_width }}>
            <PreviewProvider
              preview={preview}
              text={item?.name}
              subject={item?.subject}>
              <Teaser
                amp={amp}
                color={color}
                domain={domain}
                item={item}
                layout={teaser_props.layout}
                related={teaser_props.related}
                number={teaser_number}
              />
            </PreviewProvider>
          </Block>
        )
      })}
    </React.Fragment>
  )

  const RenderCarousel = () => (
    <Carousel {...carousel}>
      <RenderTeasers />
    </Carousel>
  )

  if (carousel_enabled) {
    return <RenderCarousel />
  }

  return <RenderTeasers />
}

export default withTheme(RenderSlot)