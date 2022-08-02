import React from 'react'

export const PrensaThemeProvider = ({ children, theme, ...otherProps }) => {
  return (
    <div className={theme}>
      {React.Children.map(children, (item: any) => React.cloneElement(item, { theme, ...otherProps }))}
    </div>
  )
}