import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Typography from '../../components/Typography'

export default {
  title: 'NewTypography',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}


export const Default = () => {
  
  const renderElement = (element) => (
    <Typography element={element}>
      The quick brown fox
    </Typography>
  )

  return (
    <React.Fragment>
      {renderElement('h1')}
      {renderElement('h2')}
      {renderElement('h3')}
      {renderElement('h4')}
      {renderElement('h5')}
      {renderElement('h6')}
      {renderElement('p')}
      {renderElement('span')}
      {renderElement('label')}
    </React.Fragment>
  )
}