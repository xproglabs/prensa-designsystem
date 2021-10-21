import { get } from 'lodash'
import React from 'react'
import { withTheme } from 'styled-components'
import { Block, Link, Typography } from 'prensa'

import { RelatedItemProps } from './RelatedTypes'

export const RelatedArea = ({ children }) => {
  return (
    <Block
      align="column"
      alignx="left"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'wrap',
        aligny: 'top',
      }}
      width="100%">
      {children}
    </Block>
  )
}

const RelatedItem = ({
  children,
  color,
  font_size,
  font_weight,
  icon,
  line_height,
  item_path,
  theme,
  mr,
  mb
}: RelatedItemProps) => {

  const icon_token = icon?.icon

  function get_icon_from_theme() {
    //Todo: Create log patter for theme findings errors
    const selected_icon = get(theme, `icons.${icon_token}`, false)
    return selected_icon
  }
  //check if icon is from CMS or static defined in layout
  const icon_component = get_icon_from_theme() || false

  return (
    <Block
      mb={mb[0]}
      lg={{ mb: mb[1] }}
      width='100%'>
      <Typography
        color={color}
        element='h2'
        fontFamily='primary'
        fontSize={font_size[0]}
        fontWeight={font_weight}
        lineHeight={line_height[0]}
        lg={{
          fontSize: font_size[1],
          lineHeight: line_height[1]
        }}
        mr={mr || 1}>
        <Link href={item_path}>
          {icon_component && React.cloneElement(icon_component, { color, ...icon })} {children}
        </Link>
      </Typography>
    </Block>
  )
}

RelatedItem.defaultProps = {
  color: 'black',
  font_size: ['14px', '14px'],
  font_weight: 400,
  line_height: ['16px', '16px'],
  mb: [2, 2]
}

export default withTheme(RelatedItem)