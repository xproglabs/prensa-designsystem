import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { data } from '../../mockup/template'
import { GridRelated as GridRelatedComponent } from './GridRelated'

export default {
  title: 'Grids',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const GridRelated = () => {

  const items_left = data.items_left
  const selected_layout = theme.teasers.image_large_left
  
  return (
    <GridRelatedComponent
      column_items={1}
      column_padding={0}
      layout={selected_layout}
      slot={items_left}
    />
  )
}