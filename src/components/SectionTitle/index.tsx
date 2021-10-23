import { get } from 'lodash'
import React, { cloneElement } from 'react'
import { withTheme } from 'styled-components'

import Link from '../Link'
import { AreaBox, TitleText } from './styled'
import { SectionTitleProps } from './types'

/**
 * Section Title Component
 * @param color expects a valid color token
 * @param icon expects a valid icon token
 * @param layout expects the layout from theme
 * @param href expects a link to wrap the area
 * @param title expects the title string
 * @returns SectionTitle component
 */
const SectionTitle = ({
  color,
  icon,
  layout,
  path,
  title,
  theme
}: SectionTitleProps) => {

  const area_layout = layout?.area || {}
  const icon_layout = layout?.icon || {}
  const link_layout = layout?.link || {}
  const text_layout = layout?.text || {}

  function get_icon_from_theme() {
    //Todo: Create log patter for theme findings errors
    const selected_icon = get(theme, `icons.${icon}`, false)
    return selected_icon
  }

  //check if icon is from CMS or static defined in layout
  const icon_component = get_icon_from_theme() || icon_layout?.component || false

  return (
    <AreaBox area={area_layout}>
      {icon_component && cloneElement(icon_component, { color, ...icon_layout })}
      <Link href={path} {...link_layout}>
        <TitleText color={color} {...text_layout}>
          {title}
        </TitleText>
      </Link>
    </AreaBox>
  )
}

export default withTheme(SectionTitle)