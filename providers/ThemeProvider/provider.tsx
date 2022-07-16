import { createTheme } from '@styles-engine'
import React from 'react'

/**
 * Prensa | ThemeProvider
 * @param props Expects theme properties
 * @returns a div HTML element with theme className
 */
export const ThemeProvider = (props) => {
  return (
    <div className={createTheme({ ...props })}>
      {props.children}
    </div>
  )
}
