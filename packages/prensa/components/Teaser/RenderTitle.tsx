import get from 'lodash/get'
import React from 'react'

import { EditArea } from '../EditArea'
import Link from '../Link'
import Typography from '../Typography'
import { LayoutProps } from './types'

function parseCid(value) {
  if (!value) return ''
  const values = value.split('.')
  const aglutinatedCid = values.join('')
  return aglutinatedCid
}

type TitleProps = {
  cid: string;
  editable?: any;
  layout: LayoutProps;
  link?: string;
  opacity_mask?: boolean;
  position?: number;
  slot_position?: number;
  title: string;
  titleEventTracking?: any;
}
/**
 * Teaser Title component
 * @param editable enable live edition
 * @param layout allow style changes based on supported props
 * @param path link path enable href for Title
 * @param title text to be rendered
 * @returns a Typography as a React element
 */
const RenderTitle = ({
  cid,
  editable,
  layout,
  link,
  opacity_mask,
  position,
  slot_position,
  title,
  titleEventTracking
}: TitleProps) => {

  const title_layout = get(layout, 'title', false)
  const title_enabled = get(layout, 'title.enabled', false)

  if (!title || !title_enabled || !title_layout) {
    return <></>
  }

  if (editable?.enabled || opacity_mask) {
    link = ''
  }

  const handleClick = () => {
    if (titleEventTracking) {
      titleEventTracking({
        cid,
        slot_position,
        teaser_position: position,
      })
    }
  }

  /** Control eventTracking ids */
  const linkid = titleEventTracking && `cid${parseCid(cid)}`

  return (
    <Typography
      color={title_layout?.color || 'neutral2'}
      element={title_layout?.element}
      fontFamily={title_layout?.font_family || 'primary'}
      fontSize={title_layout.font_size?.[0]}
      fontWeight={title_layout?.font_weight || 700 }
      lineHeight={title_layout.line_height?.[0]}
      mb={title_layout.mb?.[0]}
      shadow={opacity_mask}
      width='100%'
      lg={{
        fontSize: title_layout.font_size?.[1],
        lineHeight: title_layout.line_height?.[1],
        mb: title_layout.mb?.[1]
      }}
    >
      <EditArea {...editable}>
        <Link
          id={linkid}
          onClick={handleClick}
          hoverOpacity={0.9}
          path={link}
        >
          {title}
        </Link>
      </EditArea>
    </Typography>
  )
}

export { RenderTitle }