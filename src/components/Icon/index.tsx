import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { withTheme } from 'styled-components'
import { get } from 'lodash'

import { Svg } from './styled'
import { IconProps } from './types'

const Icon = ({
  children,
  color,
  height,
  viewBox,
  width,
  path,
  theme,
  ...otherProps
}: IconProps) => {

  const theme_icons = get(theme, 'icons', false)

  function getPath() {
    const icon_selected = theme_icons[path]
    return ReactHtmlParser(icon_selected)
  }

  function renderPath() {
    if (!theme_icons || !path) return children
    return getPath()
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      $color={color}
      height={height}
      viewBox={viewBox}
      width={width}
      {...otherProps}
    >
      {renderPath()}
    </Svg>
  )
}

Icon.defaultProps = {
  color: 'neutral3',
  height: '24px',
  viewBox: '0 0 24 24',
  width: '24px',
}

export default withTheme(Icon)