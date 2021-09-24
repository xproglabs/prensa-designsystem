import { get } from 'lodash'
import React from 'react'

import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderNumber } from './RenderMostReadNumber'
import { RenderSubject } from './RenderSubject'
import { RenderSubtitle } from './RenderSubtitle'
import { RenderTitle } from './RenderTitle'
import * as S from './styled'

export type TeaserProps = {
  color: string;
  domain: string;
  image_circle?: boolean;
  item: object;
  layout: object;
  number?: number;
  has_number?: boolean;
}

const Teaser = (props: TeaserProps) => {
  const {
    color,
    domain,
    image_circle = false,
    item,
    layout,
    number,
    has_number
  } = props
  // main props
  const item_path = get(item, 'url', false) || get(item, 'path', '')
  const item_title = get(item, 'name', '')
  const box_align = get(layout, 'box.align', ['column', 'column'])
  const box_aligny = get(layout, 'box.aligny', ['top', 'top'])
  const box_pb = get(layout, 'box.pb', [3, 3])
  const box_pt = get(layout, 'box.pt', [3, 3])
  const box_mb = get(layout, 'box.mb', [2, 2])
  const box_height = get(layout, 'box.height', ['auto', 'auto', 'auto'])
  const content_overlap = get(layout, 'box_wrap.content_overlap', false)
  const wrap_align = get(layout, 'box_wrap.align', ['column', 'column'])
  const wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top'])
  const wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto'])
  const wrap_mb = get(layout, 'box_wrap.mb', [0, 0])
  const wrap_mt = get(layout, 'box_wrap.mt', [0, 0])
  const wrap_width = get(layout, 'box_wrap.width', ['100%', '100%'])

  return (
    <S.Box
      box_align={box_align}
      box_aligny={box_aligny}
      box_height={box_height}
      box_pb={box_pb}
      box_pt={box_pt}
      box_mb={box_mb}
    >
      <RenderImage
        domain={domain}
        image_circle={image_circle}
        item={item}
        item_path={item_path}
        layout={layout}
      />
      <RenderNumber
        number={number}
        has_number={has_number}
      />
      <S.ContentWrap
        content_overlap={content_overlap}
        wrap_align={wrap_align}
        wrap_aligny={wrap_aligny}
        wrap_height={wrap_height}
        wrap_mb={wrap_mb}
        wrap_mt={wrap_mt}
        wrap_width={wrap_width}>
        <S.Content>
          <RenderSubject
            color={color}
            item={item}
            layout={layout}
          />
        </S.Content>
        <S.Content>
          <RenderTitle
            item_path={item_path}
            item_title={item_title}
            layout={layout}
          />
          <RenderSubtitle
            item={item}
            layout={layout}
          />
        </S.Content>
        <S.Content>
          <RenderDatetime
            item={item}
            layout={layout}
          />
        </S.Content>
      </S.ContentWrap>
    </S.Box>
  )
}

export default Teaser