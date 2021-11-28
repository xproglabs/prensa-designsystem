import { get } from 'lodash'
import React from 'react'

import { EditButtons } from '../EditArea'
import RelatedRender from './Related'
import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderNumber } from './RenderNumber'
import { RenderSubject } from './RenderSubject'
import { RenderSubtitle } from './RenderSubtitle'
import { RenderTitle } from './RenderTitle'
import * as S from './styled'
import { TeaserProps } from './types'

const Teaser = (props: TeaserProps) => {
  const {
    amp,
    color,
    fallback_image_url,
    edit_buttons,
    editable,
    domain,
    item,
    layout,
    number,
    related,
    states
  } = props

  // main props
  const item_path = get(item, 'url', false) || get(item, 'path', '')
  const item_title = get(item, 'name', '')
  const box_align = get(layout, 'box.align', ['column', 'column'])
  const box_alignx = get(layout, 'box.alignx', ['left', 'left'])
  const box_aligny = get(layout, 'box.aligny', ['top', 'top'])
  const box_background = get(layout, 'box.background', 'transparent')
  const box_height = get(layout, 'box.height', ['auto', 'auto', 'auto'])
  const box_pt = get(layout, 'box.pt', ['0px', '0px'])
  const box_pr = get(layout, 'box.pr', ['0px', '0px'])
  const box_pb = get(layout, 'box.pb', ['0px', '0px'])
  const box_pl = get(layout, 'box.pl', ['0px', '0px'])
  const box_mt = get(layout, 'box.mt', ['0px', '0px'])
  const box_mr = get(layout, 'box.mr', ['0px', '0px'])
  const box_mb = get(layout, 'box.mb', ['0px', '0px'])
  const box_ml = get(layout, 'box.ml', ['0px', '0px'])

  // box border props
  const box_bt = get(layout, 'box.bt', undefined)
  const box_br = get(layout, 'box.br', undefined)
  const box_bb = get(layout, 'box.bb', undefined)
  const box_bl = get(layout, 'box.bl', undefined)
  const box_b = get(layout, 'box.b', undefined)
  const box_borderColor = get(layout, 'box.borderColor', undefined)
  const box_borderStyle = get(layout, 'box.borderStyle', undefined)
  const box_radius = get(layout, 'box.radius', undefined)

  // box (content) wrap
  const content_overlap = get(layout, 'box_wrap.content_overlap', false)
  const wrap_align = get(layout, 'box_wrap.align', ['column', 'column'])
  const wrap_alignx = get(layout, 'box_wrap.alignx', ['left', 'left'])
  const wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top'])
  const wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto'])
  const wrap_width = get(layout, 'box_wrap.width', ['100%', '100%'])
  const wrap_ml = get(layout, 'box_wrap.ml', ['0px', '0px'])
  const wrap_mr = get(layout, 'box_wrap.mr', ['0px', '0px'])
  const wrap_mb = get(layout, 'box_wrap.mb', ['0px', '0px'])
  const wrap_mt = get(layout, 'box_wrap.mt', ['0px', '0px'])

  // image enabled
  const image_cid = get(item, 'img.cid', false)
  const image_contentid = get(item, 'img.contentId', image_cid)
  const image_enabled = image_contentid && get(layout, 'image.enabled', false)

  // image wrap
  const image_align = get(layout, 'image.align', ['column', 'column'])
  const image_alignx = get(layout, 'image.alignx', ['left', 'left'])
  const image_aligny = get(layout, 'image.aligny', ['top', 'top'])
  const image_height = get(layout, 'image.height', ['auto', 'auto'])
  const image_wrap_width = get(layout, 'image.wrap_width', ['100%', '100%'])
  const image_mt = get(layout, 'image.mt', ['0px', '0px'])
  const image_mr = get(layout, 'image.mr', ['0px', '0px'])
  const image_mb = get(layout, 'image.mb', ['0px', '0px'])
  const image_ml = get(layout, 'image.ml', ['0px', '0px'])

  // number wrap
  const number_enabled = get(layout, 'number.enabled', false)
  const number_align = get(layout, 'number.align', ['column', 'column'])
  const number_alignx = get(layout, 'number.alignx', ['left', 'left'])
  const number_aligny = get(layout, 'number.aligny', ['top', 'top'])
  const number_height = get(layout, 'number.height', ['auto', 'auto'])
  const number_width = get(layout, 'number.width', ['100%', '100%'])
  const number_mt = get(layout, 'number.mt', ['0px', '0px'])
  const number_mr = get(layout, 'number.mr', ['0px', '0px'])
  const number_mb = get(layout, 'number.mb', ['0px', '0px'])
  const number_ml = get(layout, 'number.ml', ['0px', '0px'])

  // opacity mask prop
  const opacity_mask = get(layout, 'opacity_mask', false)
  return (
    <S.Box
      box_align={box_align}
      box_alignx={box_alignx}
      box_aligny={box_aligny}
      background={box_background}
      box_height={box_height}
      box_pt={box_pt}
      box_pr={box_pr}
      box_pb={box_pb}
      box_pl={box_pl}
      box_mt={box_mt}
      box_mr={box_mr}
      box_mb={box_mb}
      box_ml={box_ml}
      box_bt={box_bt}
      box_br={box_br}
      box_bb={box_bb}
      box_bl={box_bl}
      box_b={box_b}
      box_borderColor={box_borderColor}
      box_borderStyle={box_borderStyle}
      box_radius={box_radius}>
      {number_enabled && 
        <S.WrapContent
          wrap_align={number_align}
          wrap_alignx={number_alignx}
          wrap_aligny={number_aligny}
          wrap_height={number_height}
          wrap_width={number_width}
          wrap_mt={number_mt}
          wrap_mr={number_mr}
          wrap_mb={number_mb}
          wrap_ml={number_ml}
        >
          <RenderNumber
            layout={layout}
            number={number}
          />
        </S.WrapContent>
      }
      {image_enabled && 
        <S.WrapContent
          wrap_align={image_align}
          wrap_aligny={image_aligny}
          wrap_alignx={image_alignx}
          wrap_height={image_height}
          wrap_width={image_wrap_width}
          wrap_mt={image_mt}
          wrap_mr={image_mr}
          wrap_mb={image_mb}
          wrap_ml={image_ml}>
          <RenderImage
            amp={amp}
            domain={domain}
            editable={{
              enabled: editable?.enabled
            }}
            fallback_image_url={fallback_image_url}
            image_circle={layout?.image_circle}
            item={item}
            item_path={item_path}
            layout={layout}
            opacityMask={opacity_mask}
          />
        </S.WrapContent>
      }
      <S.WrapContent
        content_overlap={content_overlap}
        wrap_align={wrap_align}
        wrap_aligny={wrap_aligny}
        wrap_alignx={wrap_alignx}
        wrap_height={wrap_height}
        wrap_width={wrap_width}
        wrap_mt={wrap_mt}
        wrap_mr={wrap_mr}
        wrap_mb={wrap_mb}
        wrap_ml={wrap_ml}>
        <S.WrapSubject>
          <RenderSubject
            editable={{
              enabled: editable?.enabled,
              set_modified: editable?.set_modified,
              set_selected: editable?.set_selected,
              state: states?.subject
            }}
            color={color}
            item={item}
            layout={layout}
          />
          <EditButtons {...edit_buttons} />
        </S.WrapSubject>
        <RenderTitle
          editable={{
            enabled: editable?.enabled,
            set_modified: editable?.set_modified,
            set_selected: editable?.set_selected,
            state: states?.title
          }}
          layout={layout}
          link={item_path}
          shadow={opacity_mask}
          title={item_title}
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