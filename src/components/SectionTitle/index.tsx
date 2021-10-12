import React from 'react'

import {
  AreaBox,
  AreaLink,
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
      <AreaLink
        path={path}>
        <TitleIcon
          icon={icon} />
        <TitleText
          {...layout}
          color={color}>
          {title}
        </TitleText>
      </AreaLink>
    </AreaBox>
  )
}
export default SectionTitle