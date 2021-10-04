import { get } from 'lodash'
import React from 'react'

import RelatedRender from './Related'
import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderSubject } from './RenderSubject'
import { RenderSubtitle } from './RenderSubtitle'
import { RenderTitle } from './RenderTitle'
import * as S from './styled'
import { TeaserProps } from './types'

const Teaser = (props: TeaserProps) => {
  const {
    color,
    domain,
    image_circle,
    item,
    layout,
    related
  } = props
  // main props
  const item_path = get(item, 'url', false) || get(item, 'path', '')
  const item_title = get(item, 'name', '')
  const box_align = get(layout, 'box.align', ['column', 'column'])
  const box_aligny = get(layout, 'box.aligny', ['top', 'top'])
  const box_pb = get(layout, 'box.pb', [0, 0])
  const box_pt = get(layout, 'box.pt', [0, 0])
  const box_mb = get(layout, 'box.mb', [2, 2])
  const box_height = get(layout, 'box.height', ['auto', 'auto', 'auto'])
  // box (content) wrap
  const content_overlap = get(layout, 'box_wrap.content_overlap', false)
  const wrap_align = get(layout, 'box_wrap.align', ['column', 'column'])
  const wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top'])
  const wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto'])
  const wrap_width = get(layout, 'box_wrap.width', ['100%', '100%'])
  const wrap_ml = get(layout, 'box_wrap.ml', [0, 0])
  const wrap_mr = get(layout, 'box_wrap.mr', [0, 0])
  const wrap_mb = get(layout, 'box_wrap.mb', [0, 0])
  const wrap_mt = get(layout, 'box_wrap.mt', [0, 0])
  // image wrap
  const image_align = get(layout, 'image.box.align', ['column', 'column'])
  const image_aligny = get(layout, 'image.box.aligny', ['top', 'top'])
  const image_height = get(layout, 'image.box.height', ['auto', 'auto'])
  const image_width = get(layout, 'image.box.width', ['100%', '100%'])
  const image_mt = get(layout, 'image.mt', [0, 0])
  const image_mr = get(layout, 'image.mr', [0, 0])
  const image_mb = get(layout, 'image.mb', [0, 0])
  const image_ml = get(layout, 'image.ml', [0, 0])
  return (
    <S.Box
      box_align={box_align}
      box_aligny={box_aligny}
      box_height={box_height}
      box_pb={box_pb}
      box_pt={box_pt}
      box_mb={box_mb}>
      <S.WrapContent
        wrap_align={image_align}
        wrap_aligny={image_aligny}
        wrap_height={image_height}
        wrap_width={image_width}
        wrap_mt={image_mt}
        wrap_mr={image_mr}
        wrap_mb={image_mb}
        wrap_ml={image_ml}>
        <RenderImage
          domain={domain}
          image_circle={image_circle}
          item={item}
          item_path={item_path}
          layout={layout}
        />
      </S.WrapContent>
      <S.WrapContent
        content_overlap={content_overlap}
        wrap_align={wrap_align}
        wrap_aligny={wrap_aligny}
        wrap_height={wrap_height}
        wrap_width={wrap_width}
        wrap_mt={wrap_mt}
        wrap_mr={wrap_mr}
        wrap_mb={wrap_mb}
        wrap_ml={wrap_ml}>
        <RenderSubject
          color={color}
          item={item}
          layout={layout}
        />
        <RenderTitle
          item_path={item_path}
          item_title={item_title}
          layout={layout}
        />
        <RenderSubtitle
          item={item}
          layout={layout}
        />
        <RenderDatetime
          item={item}
          layout={layout}
        />
        <RelatedRender
          color={color}
          layout={layout?.related}
          {...related}
        />
      </S.WrapContent>
    </S.Box>
  )
}

export default Teaser