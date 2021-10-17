import React from 'react'

import Link from '../Link'
import { AreaBox, TitleIcon, TitleText } from './styled'
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
  href,
  title
}: SectionTitleProps) => {

  const area_layout = layout?.area || {}
  const icon_layout = layout?.icon || {}
  const link_layout = layout?.link || {}
  const text_layout = layout?.text || {}

  return (
    <AreaBox area={area_layout}>
      <Link href={href} {...link_layout}>
        {/* <TitleIcon icon={icon} {...icon_layout} /> */}
        <TitleText color={color} {...text_layout}>
          {title}
        </TitleText>
      </Link>
    </AreaBox>
  )
}

export default SectionTitle