import React from 'react'

import { PrensaEngineDefaultConfig } from '../../prensa.default.config'
import { PrensaThemeProviderProps } from './props'

export const PrensaThemeProvider = (props: PrensaThemeProviderProps) => {
  const { children, theme, ...otherProps } = props
  return (
    <div className={theme}>
      {React.Children.map(children, (item: any) => React.cloneElement(item, otherProps))}
    </div>
  )
}

PrensaThemeProvider.defaultProps = {
  theme: PrensaEngineDefaultConfig.theme
}