import { get } from 'lodash'
import React from 'react'

import AreaButtons from './AreaButtons'
import RelatedRender from './Related'
import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderSubject } from './RenderSubject'
import { RenderSubtitle } from './RenderSubtitle'
import * as S from './styled'
import TeaserTitle from './Title'
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
  // editable refs
  const edition_text = React.useRef(item?.name || '')
  const edition_subject = React.useRef(item?.subject || '')
  const [edition_modified, set_modified] = React.useState(false)
  const [edition_restart, set_restart] = React.useState(false)
  const [edition_saving, set_saving] = React.useState(false)
  // editable reset function
  const resetEditionFields = () => {
    edition_text.current = item?.name
    edition_subject.current = item?.subject
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
      box_ml={box_ml}>
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
        wrap_alignx={wrap_alignx}
        wrap_height={wrap_height}
        wrap_width={wrap_width}
        wrap_mt={wrap_mt}
        wrap_mr={wrap_mr}
        wrap_mb={wrap_mb}
        wrap_ml={wrap_ml}>
        <RenderSubject
          editable={{
            enabled: true,
            modified: edition_modified,
            saving: edition_saving,
            set_modified: set_modified,
            state: edition_subject
          }}
          color={color}
          item={item}
          layout={layout}
        />
        <TeaserTitle
          editable={{
            enabled: true,
            modified: edition_modified,
            saving: edition_saving,
            set_modified: set_modified,
            state: edition_text
          }}
          layout={layout}
          link={item_path}
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
        <AreaButtons
          action={submitEditionFields}
          enabled={edition_modified}
          reset={resetEditionFields}
        />
      </S.WrapContent>
    </S.Box>
  )
}

export default Teaser