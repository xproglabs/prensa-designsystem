import { Typography } from 'prensa'
import React from 'react'

import {
import { LayoutProps } from './types'
} from './types'

export type ItemProps = {
  subtitle?: string;
}

export type RenderSubtitleType = {
  item: ItemProps;
  layout: LayoutProps;
}

const Subtitle = ({
  children,
  color,
  font_size,
  line_height,
  mb
}) => {
  return (
    <Typography
      color={color}
      element='h2'
      fontFamily='secondary'
      fontSize={font_size[0]}
      fontWeight={300}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1],
        mb: mb[1]
      }}
      mb={mb[0]}
      width='100%'>
      {children}
    </Typography> 
  )
}
Subtitle.defaultProps = {
  color: 'black',
  font_size: ['14px', '14px'],
  line_height: ['16px', '16px'],
  mb: [2, 2]
}

const RenderSubtitle = ({
  item,
  layout
}: RenderSubtitleType) => {
  if (!item?.subtitle || !layout?.subtitle?.enabled) {
    return null
  }
  return (
    <Subtitle
      color={layout?.subtitle?.color}
      font_size={layout?.subtitle?.font_size}
      line_height={layout?.subtitle?.line_height}
      mb={layout?.subtitle?.mb}>
      {item.subtitle}
    </Subtitle>
  )
}

export { RenderSubtitle }