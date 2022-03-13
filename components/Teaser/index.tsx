import { get } from 'lodash'
import React from 'react'

import { EditButtons } from '../EditArea'
import Block from '../NewBlock'
import RelatedRender from './Related'
import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderNumber } from './RenderNumber'
import { RenderProfile } from './RenderProfile'
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
    eventTracking,
    edit_buttons,
    editable,
    domain,
    item,
    layout,
    number,
    related,
    slot_position,
    states
  } = props

  // main props
  const item_cid = get(item, 'cid', '')
  const item_path = get(item, 'url', false) || get(item, 'path', '')
  const item_title = get(item, 'name', '')
  const box_align = get(layout, 'box.align', ['column', 'column'])
  const box_alignx = get(layout, 'box.alignx', ['center', 'center'])
  const box_aligny = get(layout, 'box.aligny', ['top', 'top'])
  const box_background = get(layout, 'box.background', 'transparent')
  const box_height = get(layout, 'box.height', ['auto', 'auto', 'auto'])
  const box_pt = get(layout, 'box.pt', [undefined, undefined])
  const box_pr = get(layout, 'box.pr', [undefined, undefined])
  const box_pb = get(layout, 'box.pb', [undefined, undefined])
  const box_pl = get(layout, 'box.pl', [undefined, undefined])
  const box_mt = get(layout, 'box.mt', [undefined, undefined])
  const box_mr = get(layout, 'box.mr', [undefined, undefined])
  const box_mb = get(layout, 'box.mb', [2, 2])
  const box_ml = get(layout, 'box.ml', [undefined, undefined])

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
  const wrap_align = get(layout, 'box_wrap.align', ['column', 'column'])
  const wrap_alignx = get(layout, 'box_wrap.alignx', ['left', 'left'])
  const wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top'])
  const wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto'])
  const wrap_width = get(layout, 'box_wrap.width', ['100%', '100%'])
  const wrap_ml = get(layout, 'box_wrap.ml', [undefined, undefined])
  const wrap_mr = get(layout, 'box_wrap.mr', [undefined, undefined])
  const wrap_mb = get(layout, 'box_wrap.mb', [undefined, undefined])
  const wrap_mt = get(layout, 'box_wrap.mt', [undefined, undefined])
  const wrap_pl = get(layout, 'box_wrap.pl', undefined)
  const wrap_pr = get(layout, 'box_wrap.pr', undefined)
  const wrap_pb = get(layout, 'box_wrap.pb', undefined)
  const wrap_pt = get(layout, 'box_wrap.pt', undefined)

  // image enabled
  const image_cid = get(item, 'img.cid', false)
  const image_contentid = get(item, 'img.contentId', image_cid)
  const image_enabled = (image_contentid || fallback_image_url) && get(layout, 'image.enabled', false)

  // image wrap
  const image_align = get(layout, 'image.align', ['column', 'column'])
  const image_alignx = get(layout, 'image.alignx', ['left', 'left'])
  const image_aligny = get(layout, 'image.aligny', ['top', 'top'])
  const image_height = get(layout, 'image.height', ['auto', 'auto'])
  const image_wrap_width = get(layout, 'image.wrap_width', ['100%', '100%'])
  const image_mt = get(layout, 'image.mt', [undefined, undefined])
  const image_mr = get(layout, 'image.mr', [undefined, undefined])
  const image_mb = get(layout, 'image.mb', [undefined, undefined])
  const image_ml = get(layout, 'image.ml', [undefined, undefined])

  // number wrap
  const number_enabled = get(layout, 'number.enabled', false)
  const number_align = get(layout, 'number.align', ['column', 'column'])
  const number_alignx = get(layout, 'number.alignx', ['left', 'left'])
  const number_aligny = get(layout, 'number.aligny', ['top', 'top'])
  const number_height = get(layout, 'number.height', ['auto', 'auto'])
  const number_width = get(layout, 'number.width', ['100%', '100%'])
  const number_mt = get(layout, 'number.mt', [undefined, undefined])
  const number_mr = get(layout, 'number.mr', [undefined, undefined])
  const number_mb = get(layout, 'number.mb', [undefined, undefined])
  const number_ml = get(layout, 'number.ml', [undefined, undefined])

  // profile enabled and options
  const profile_data = get(item, 'parentBio', false)
  const profile_data_visible = get(profile_data, 'enabled', false)
  const profile_image_enabled = get(layout, 'profile_image.enabled', false)
  const profile_layout = get(layout, 'profile_bio', {})
  const profile_layout_enabled = get(layout, 'profile_bio.enabled', false)
  const profile_layout_height = get(profile_layout, 'height', ['40px', '40px'])
  const profile_layout_width = get(profile_layout, 'width', ['40px', '40px'])
  const isProfileEnabled = profile_data_visible && profile_layout_enabled

  //related
  const related_layout = get(layout, 'related', {})

  const profile_content = {
    name: get(profile_data, 'name'),
    image: {
      ...get(profile_data, 'image'),
      height: profile_layout_height,
      width: profile_layout_width
    },
    path: get(profile_data, 'path'),
    enabled: isProfileEnabled
  }

  // opacity mask prop
  const opacity_mask = get(layout, 'opacity_mask', false)

  //eventTracking
  const titleEventTracking = eventTracking?.titleEventTracking

  const RenderNumberWrap = () => {
    if (!number_enabled) {
      return null
    }
    return (
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
    )
  }

  const RenderImageWrap = () => {
    if (!image_enabled) {
      return null
    }

    if (profile_image_enabled) {
      if (item) {
        item['img'] = {
          byl: '',
          cap: profile_content?.name,
          cid: profile_content?.image?.contentId,
          sub: ''
        }
      }
    }

    return (
      <S.WrapContent
        wrap_align={image_align}
        wrap_aligny={image_aligny}
        wrap_alignx={image_alignx}
        wrap_height={image_height}
        wrap_width={image_wrap_width}
        wrap_mt={image_mt}
        wrap_mr={image_mr}
        wrap_mb={image_mb}
        wrap_ml={image_ml}
      >
        <RenderImage
          amp={amp}
          domain={domain}
          editable={editable}
          fallback_image_url={fallback_image_url}
          image_circle={layout?.image_circle}
          item={item}
          item_path={item_path}
          layout={layout}
          opacityMask={opacity_mask}
        />
      </S.WrapContent>
    )
  }

  const RenderDateTimeWrap = () => {
    return (
      <RenderDatetime
        item={item}
        layout={{
          date_time: { ...layout?.date_time, enabled: true }
        }}
      />
    )
  }

  const RenderContentWrap = () => {
    return (
      <S.WrapContent
        editable={editable}
        item={item}
        item_path={item_path}
        layout={layout}
        opacity_mask={opacity_mask}
        wrap_align={wrap_align}
        wrap_aligny={wrap_aligny}
        wrap_alignx={wrap_alignx}
        wrap_height={wrap_height}
        wrap_width={wrap_width}
        wrap_mt={wrap_mt}
        wrap_mr={wrap_mr}
        wrap_mb={wrap_mb}
        wrap_ml={wrap_ml}
        wrap_pt={wrap_pt}
        wrap_pr={wrap_pr}
        wrap_pb={wrap_pb}
        wrap_pl={wrap_pl}
      >
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
          <EditButtons
            {...edit_buttons}
          />
        </S.WrapSubject>
        <RenderTitle
          cid={item_cid}
          editable={{
            enabled: editable?.enabled,
            set_modified: editable?.set_modified,
            set_selected: editable?.set_selected,
            state: states?.title
          }}
          layout={layout}
          link={item_path}
          slot_position={slot_position}
          opacity_mask={opacity_mask}
          position={number}
          title={item_title}
          titleEventTracking={titleEventTracking}
        />
        <RenderSubtitle
          item={item}
          layout={layout}
        />
        {isProfileEnabled ?
          <RenderProfile
            amp={amp}
            domain={domain}
            content={profile_content}
            containerProps={{ width: '100%' }}
            subtitleContainer={() => <RenderDateTimeWrap />}
          />
          :
          <RenderDatetime
            item={item}
            layout={layout}
          />
        }
        <RelatedRender
          color={color}
          layout={related_layout}
          {...related}
        />
      </S.WrapContent>
    )
  }

  const parseBoxWidth = () => {
    if (box_b) {
      return `calc(100% - ${box_b} - ${box_b})`
    }
    if (box_bl && box_br) {
      return `calc(100% - ${box_bl} - ${box_br})`
    }
    if (box_bl) {
      return `calc(100% - ${box_bl})`
    }
    if (box_br) {
      return `calc(100% - ${box_br})`
    }
    return '100%'
  }

  const box_width = parseBoxWidth()

  return (
    <Block
      align={box_align}
      alignx={box_alignx}
      aligny={box_aligny}
      bgColor={box_background}
      height={box_height}
      pt={box_pt}
      pr={box_pr}
      pb={box_pb}
      pl={box_pl}
      mt={box_mt}
      mr={box_mr}
      mb={box_mb}
      ml={box_ml}
      bt={box_bt}
      br={box_br}
      bb={box_bb}
      bl={box_bl}
      b={box_b}
      borderColor={box_borderColor}
      borderStyle={box_borderStyle}
      radius={box_radius}
      width={box_width}
    >
      <RenderNumberWrap />
      <RenderImageWrap />
      <RenderContentWrap />
    </Block>
  )
}

export default Teaser