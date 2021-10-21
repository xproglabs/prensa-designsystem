import { get } from 'lodash'
import React from 'react'
import styled, { withTheme } from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'
import { RelatedItemProps } from './RelatedTypes'

const AreaLink = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  white-space: normal;
  &:hover {
    opacity: 0.9;
  }

  svg {
    min-width: 24px;
    margin-right: 8px;
  }
`

export const RelatedArea = ({ children }) => {
  return (
    <Block
      align="column"
      alignx="left"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        custom: 'flex-wrap: wrap;'
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
  
  function get_icon_from_theme() {
    //Todo: Create log patter for theme findings errors
    const selected_icon = get(theme, `icons.${icon}`, false)
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
        <AreaLink
          href={item_path}>
          {icon_component && React.cloneElement(icon_component, { color })} {children}
        </AreaLink>
      </Typography>
    </Block>
  )
}

RelatedItem.defaultProps = {
  color: 'black',
  font_size: ['14px', '14px'],
  font_weight: 300,
  line_height: ['16px', '16px'],
  mb: [2, 2]
}

export default withTheme(RelatedItem)