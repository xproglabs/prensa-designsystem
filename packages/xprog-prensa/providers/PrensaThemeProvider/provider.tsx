import React from 'react'

import { PrensaEngine } from '../../prensa.default.config'
import { PrensaThemeProviderProps } from './props'

export const PrensaThemeProvider = (props: PrensaThemeProviderProps) => {
  const { children, theme, ...otherProps } = props

  const selectedTheme = theme ?
    PrensaEngine.createTheme('prensa-ds', theme) :
    PrensaEngine.createTheme('prensa-ds', PrensaEngine.config.theme)

  return (
    <div className={selectedTheme.className}>
      {React.Children.map(children, (item: any) => React.cloneElement(item, otherProps))}
    </div>
  )
}