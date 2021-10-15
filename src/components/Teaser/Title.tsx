import { get } from 'lodash'
import React from 'react'

import { EditArea } from '../EditArea'
import { LinkArea } from '../Link'
import Typography from '../Typography'

interface TitleProps {
  editable?: any;
  layout: any;
  link?: string;
  title: string;
}
/**
 * Teaser Title component
 * @param editable to enable edition
 * @param layout styles from theme
 * @param link path to link the click
 * @param title teaser text title
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
        <LinkArea
          hoverOpacity={0.9}
          path={link}>
          {title}
        </LinkArea>
      </EditArea>
    </Typography>
  )
}

export default Title