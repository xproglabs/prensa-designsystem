import React from 'react'

import Link from '../Link'
import { AreaBox, TitleText } from './styled'
import { SectionTitleProps } from './types'
import Icon from '../Icon'

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

  const icon_path = icon || icon_layout?.path || false

  return (
    <AreaBox area={area_layout}>
      <Link href={href} {...link_layout}>
        {icon_path && 
          <Icon
            color={color}
            path={icon_path}
            {...icon_layout}
          />
        }
        <TitleText color={color} {...text_layout}>
          {title}
        </TitleText>
      </Link>
    </AreaBox>
  )
}

export default SectionTitle