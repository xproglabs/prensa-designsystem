import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import AmpImage from '../Image'
import { path_absolute } from '../Image/pathAbsolute'
import { dateDistance } from '../Util'
import * as S from './styled'

const Teaser = ({
  color,
  domain,
  image_circle = false,
  item,
  layout,
  number,
  number_enabled
}) => {
  // main props
  const item_path = get(item, 'path', '')
  const item_title = get(item, 'name', '')
  // Render DateTime
  const RenderDatetime = () => {
    const datetime_enabled = get(layout, 'datetime_enabled', false)
    const time_article_modified = get(item, 'time-modified', '')
    const time_formatted = get(item, 'time_modifiedDate', time_article_modified)
    if(!time_formatted || !datetime_enabled) {
      return false
    }
    let time_string = dateDistance(time_formatted, 2880)
    time_string = time_string && time_string.startsWith('Há') ?
      time_string.replace('Há', 'Atualizado há') :
      `Atualizado em ${time_string}`
    return (
      <S.Datetime>
        {time_string}
      </S.Datetime>
    )
  }
  // Render Teaser Image
  const RenderImage = () => {
    const image_enabled = get(layout, 'image.enabled', false)
    const image_object = get(item, 'image', false)
    const image_contentid = get(image_object, 'contentId', false)
    if(!image_contentid || !image_enabled) {
      return false
    }
    const image_caption = get(image_object, 'caption', '')
    const mobile_dim = get(layout, 'image.dimension[0]', '1x1')
    const height = get(layout, 'image.height', 600)
    const mobile_height = get(layout, 'image.height[0]', 600)
    const mobile_width = get(layout, 'image.width[0]', 600)
    const desktop_dim = get(layout, 'image.dimension[1]', '1x1')
    const desktop_height = get(layout, 'image.height[1]', 600)
    const desktop_width = get(layout, 'image.width[1]', 600)
    const image_box = get(layout, 'image.box', ['100%', '100%'])
    const image_path_mobile = path_absolute(mobile_dim, domain, image_contentid, 600)
    const image_path_desktop = path_absolute(desktop_dim, domain, image_contentid, 600)
    const image_mb = get(layout, 'image.mb', [0, 0])
    const image_ml = get(layout, 'image.ml', [0, 0])
    return (
      <Block
        mb={image_mb[0]}
        ml={image_ml[0]}
        lg={{
          mb: image_mb[1],
          ml: image_ml[1],
          width: image_box[1]
        }}
        width={image_box[0]}
      >
        <S.AreaLink
          href={item_path}
        >
          <S.Image
            image_circle={image_circle}
            height={height}
          >
            <AmpImage
              custom_class={image_circle == true ? 'image-with-radius' : ''}
              title={image_caption}
              mobile_layout="responsive"
              mobile_path={image_path_mobile}
              mobile_height={mobile_height}
              mobile_width={mobile_width}
              desktop_layout="responsive"
              desktop_path={image_path_desktop}
              desktop_height={desktop_height}
              desktop_width={desktop_width}
            />
          </S.Image>
        </S.AreaLink>
      </Block>
    )
  }
  // Render Number (mostread)
  const RenderNumber = () => {
    if(!number_enabled) {
      return false
    }
    const number_parsed = number + 1
    return (
      <S.Number>
        {number_parsed}
      </S.Number>
    )
  }
  // Render Subject
  const RenderSubject = () => {
    const subject_enabled = get(layout, 'subject.enabled', false)
    const subject_value = get(item, 'subject', '')
    if(!subject_value || !subject_enabled) {
      return false
    }
    const bg_color = get(layout, 'subject.bg_color', ['14px', '14px'])
    const font_color = color ? color : get(layout, 'subject.color', ['14px', '14px'])
    const font_size = get(layout, 'subject.font_size', ['14px', '14px'])
    const line_height = get(layout, 'subject.line_height', ['16px', '16px'])
    const mb = get(layout, 'subject.mb', [2, 2])
    return (
      <S.Subject
        bg_color={bg_color}
        color={font_color}
        font_size={font_size}
        line_height={line_height}
        mb={mb}>
        {subject_value} 
      </S.Subject>
    )
  }
  // Render Subtitle
  const RenderSubtitle = () => {
    const subtitle_enabled = get(layout, 'subtitle.enabled', false)
    const subtitle_value = get(item, 'subtitle', '')
    if(!subtitle_value || !subtitle_enabled) {
      return false
    }
    const color = get(layout, 'subtitle.color', ['14px', '14px'])
    const font_size = get(layout, 'subtitle.font_size', ['14px', '14px'])
    const line_height = get(layout, 'subtitle.line_height', ['16px', '16px'])
    return (
      <S.Subtitle
        color={color}
        font_size={font_size}
        line_height={line_height}>
        {subtitle_value}
      </S.Subtitle>
    )
  }
  // Render main Title
  const RenderTitle = () => {
    const title_enabled = get(layout, 'title.enabled', false)
    if(!item_title || !title_enabled) {
      return false
    }
    const font_size = get(layout, 'title.font_size', ['32px', '44px'])
    const line_height = get(layout, 'title.line_height', ['36px', '48px'])
    const mb = get(layout, 'title.mb', [2, 2])
    return (
      <S.Title
        font_size={font_size}
        line_height={line_height}
        mb={mb}>
        <S.AreaLink
          href={item_path}
        >
          {item_title}
        </S.AreaLink>
      </S.Title>
    )
  }
  const box_align = get(layout, 'box.align', ['column', 'column'])
  const box_aligny = get(layout, 'box.aligny', ['top', 'top'])
  const box_pb = get(layout, 'box.pb', [3, 3])
  const box_pt = get(layout, 'box.pt', [3, 3])
  const box_mb = get(layout, 'box.mb', [2, 2])
  const box_height = get(layout, 'box.height', ['auto', 'auto', 'auto'])
  const wrap_align = get(layout, 'box_wrap.align', ['column', 'column'])
  const wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top'])
  const wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto'])
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
      <RenderImage />
      <RenderNumber />
      <S.ContentWrap
        wrap_align={wrap_align}
        wrap_aligny={wrap_aligny}
        wrap_height={wrap_height}
        wrap_mt={wrap_mt}
        wrap_width={wrap_width}
      >
        <S.Content>
          <RenderSubject />
        </S.Content>
        <S.Content>
          <RenderTitle />
          <RenderSubtitle />
        </S.Content>
        <S.Content>
          <RenderDatetime />
        </S.Content>
      </S.ContentWrap>
    </S.Box>
  )
}

export default withTheme(Teaser)