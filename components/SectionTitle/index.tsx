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
  href,
  icon,
  layout,
  path,
  title,
  theme
}: SectionTitleProps) => {

  const area_layout: any = layout?.area || {}
  const icon_layout: any = layout?.icon || {}
  const link_layout: any = layout?.link || {}
  const text_layout: any = layout?.text || {}

  function get_icon_from_theme() {
    //Todo: Create log patter for theme findings errors
    const selected_icon = get(theme, `icons.${icon}`, false)
    return selected_icon
  }

  //check if icon is from CMS or static defined in layout
  const icon_component = get_icon_from_theme() || icon_layout?.component || false

  //url mount
  const url = path || href

  return (
    <AreaBox area={area_layout}>
      {icon_component && 
        <Link href={url}>
          {cloneElement(icon_component, { color, ...icon_layout })}
        </Link>
      }
      <TitleText color={color} {...text_layout}>
        <Link href={url} {...link_layout}>
          {title}
        </Link>
      </TitleText>
    </AreaBox>
  )
}

export default withTheme(SectionTitle)