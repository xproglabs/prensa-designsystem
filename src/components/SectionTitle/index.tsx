import React from 'react'

import { LinkArea } from '../Link'
import {
  AreaBox,
  TitleIcon,
  TitleText
} from './styled'
import { SectionTitleProps } from './types'
/**
 * Section Title Component
 * @param color expects a valid color token
 * @param icon expects a valid icon token
 * @param layout expects the layout from theme
 * @param path expects a link to wrap the area
 * @param title expects the title string
 * @returns Section Title as a React Component
 */
const SectionTitle = ({
  color,
  icon,
  layout,
  path,
  title
}: SectionTitleProps) => {
  return (
    <AreaBox
      area={layout?.area}>
      <LinkArea
        path={path}>
        <TitleIcon
          icon={icon} />
        <TitleText
          {...layout}
          color={color}>
          {title}
        </TitleText>
      </LinkArea>
    </AreaBox>
  )
}
export default SectionTitle