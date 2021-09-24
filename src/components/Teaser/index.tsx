import { get } from 'lodash'
import React, {cloneElement, ReactElement} from 'react'

import { RenderDatetime } from './RenderDateTime'
import { RenderImage } from './RenderImage'
import { RenderSubject } from './RenderSubject'
import { RenderSubtitle } from './RenderSubtitle'
import { RenderTitle } from './RenderTitle'
import * as S from './styled'
import { TeaserProps } from './types'

type BoxTypes = {
  align: [string, string];
  aligny: [string, string];
  pb: [number, number];
  pt: [number, number];
  mb: [number, number];
  height: [string, string, string];
}

type BoxWrap = {
  content_overlap: boolean;
  align: [string, string];
  aligny: [string, string]; 
  height: [string, string];
  mb: [number, number];
  mt: [number, number];
  width: [string, string];
}

type Image = {
  dimensions: [string, string];
  enabled: boolean;
  height: [number, number];
  width: [number, number];
  box: [string, string];
  mb: [number, number];
  ml: [number, number];
}

type Subject = {
  bg_color: string;
  color: string;
  font_size: [string, string];
  enabled: boolean;
  line_height: [string, string];
  mb: [number, number];
}

type Subtitle = {
  color: string;
  font_size: [string, string];
  enabled: boolean;
  line_height: [string, string];
}

type Title = {
  color: string;
  element: string;
  enabled: boolean;
  font_size: [string, string];
  line_height: [string, string];
  mb: [number, number];
}

export type LayoutProps = {
  box?: BoxTypes;
  box_wrap?: BoxWrap;
  image?: Image;
  datetime_enabled?: boolean;
  subject?: Subject;
  subtitle?: Subtitle;
  title?: Title;
}

export type TeaserProps = {
  color: string;
  domain: string;
  image_circle?: boolean;
  item: object;
  layout?: LayoutProps;
  /**
   * Render_space function
   * @param component Expects a ReactElement
   * @returns a React cloneElement hook for rendering the component passed as a prop
   */
  spaceLeft?: ReactElement;
  /**
   * Render_space function
   * @param component Expects a ReactElement
   * @returns a React cloneElement hook for rendering the component passed as a prop
   */
  spaceRight?: ReactElement;
}

const Teaser = (props: TeaserProps) => {
  const {
    color,
    domain,
    image_circle = false,
    item,
    layout,
    spaceLeft,
    spaceRight
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

  /**
   * Render_space function
   * @param component Expects a ReactElement
   * @returns a React cloneElement hook for rendering the component passed as a prop
   */
  const render_space = (component: ReactElement) => {
    if (!component) return null
    return cloneElement(component)
  }

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
     {render_space(spaceLeft)}
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
      {render_space(spaceRight)}
    </S.Box>
  )
}

export default Teaser