import { get } from 'lodash'
import React from 'react'

import { EditArea } from '../EditArea'
import Link from '../Link'
import Typography from '../Typography'
import { LayoutProps } from './types'

type TitleProps = {
  editable?: any;
  layout: LayoutProps;
  link?: string;
  title: string;
}
/**
 * Teaser Title component
 * @param editable enable live edition
 * @param layout allow style changes based on supported props
 * @param link link path enable href for Title
 * @param title text to be rendered
 * @returns a Typography as a React element
 */
const Title = ({
  editable,
  layout,
  link,
  title
}: TitleProps) => {
  const title_layout = get(layout, 'title', false)
  const title_enabled = get(layout, 'title.enabled', false)
  if(!title || !title_enabled || !title_layout) {
    return <></>
  }
  if(editable?.enabled) {
    link = ''
  }
  return (
    <Typography
      color={title_layout?.color || 'neutral2'}
      element={title_layout?.element}
      fontFamily={title_layout?.font_family || 'primary'}
      fontSize={title_layout.font_size?.[0]}
      fontWeight={700}
      lineHeight={title_layout.line_height?.[0]}
      mb={title_layout.mb?.[0]}
      width='100%'
      lg={{
        fontSize: title_layout.font_size?.[1],
        lineHeight: title_layout.line_height?.[1],
        mb: title_layout.mb?.[1]
      }}>
      <EditArea {...editable}>
        <Link
          hoverOpacity={0.9}
          href={link}>
          {title}
        </Link>
      </EditArea>
    </Typography>
  )
}

export default Title