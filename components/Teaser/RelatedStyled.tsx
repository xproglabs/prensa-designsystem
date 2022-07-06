import get from 'lodash/get'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'
import Link from '../Link'
import Typography from '../Typography'
import { RelatedItemProps } from './RelatedTypes'

export const RelatedArea = ({ children }: any) => {
  return (
    <Block
      align={['column', 'row']}
      alignx={['left', 'left']}
      aligny={['top', 'top']}
      width='100%'
    >
      {children}
    </Block>
  )
}

const RelatedItem = ({
  children,
  color,
  element,
  font_size,
  font_weight,
  icon,
  item_path,
  line_height,
  mb,
  mr,
  theme
}: RelatedItemProps) => {

  const icon_token = icon?.icon
  const icon_width = icon?.width

  function get_icon_from_theme() {
    //Todo: Create log patter for theme findings errors
    const selected_icon = get(theme, `icons.${icon_token}`, false)
    return selected_icon
  }
  //check if icon is from CMS or static defined in layout
  const icon_component = get_icon_from_theme() || false

  return (
    <Block
      mb={mb}
      width='100%'
    >
      <Block align='row'>
        <Block
          mr={mr}
          width={icon_width || '42px'}
        >
          {icon_component && React.cloneElement(
            icon_component,
            { color, ...icon }
          )}
        </Block>
        <Block width='100%'>
          <Typography
            color='neutral2'
            element={element}
            fontFamily='primary'
            fontSize={font_size}
            fontWeight={font_weight}
            lineHeight={line_height}
          >
            <Link path={item_path} hoverOpacity={0.9}>
              {children}
            </Link>
          </Typography>
        </Block>
      </Block>
    </Block>
  )
}

RelatedItem.defaultProps = {
  color: 'black',
  element: 'h2',
  font_size: ['14px', '14px'],
  font_weight: 400,
  line_height: ['16px', '16px'],
  mb: [2, 2],
  mr: 1
}

export default withTheme(RelatedItem)