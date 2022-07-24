import React from 'react'

import { createTheme } from '../../stitches.config'

export const PrensaThemeProvider = (props) => {
  const { children, theme, ...otherProps } = props
  const defaultThemeProps = { colors: { primary: 'yellow' } }
  const darkThemeProps = { colors: { primary: 'blue' } }
  const defaultTheme = createTheme('default-theme', defaultThemeProps)
  const darkTheme = createTheme('dark-theme', darkThemeProps)

  let selectedTheme
  switch (theme) {
    case 'default-theme':
      selectedTheme = defaultTheme
      break
    case 'dark-theme':
      selectedTheme = darkTheme
      break
    default:
      selectedTheme = defaultTheme
  }
  
  return (
    <div className={selectedTheme}>
      {React.Children.map(children, (item: any) => (
        React.cloneElement(item, { ...otherProps })
      ))}
    </div>
  )
}