import React from 'react'
import { StorybookTheme } from './StorybookTheme'

export const StorybookThemeProvider = (props) => {
  return (
    <div className={StorybookTheme.className}>
      {props.children}
    </div>
  )
}