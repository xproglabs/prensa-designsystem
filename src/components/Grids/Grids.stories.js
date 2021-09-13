import React from 'react'
import { ThemeProvider } from 'styled-components'

import { data } from '../../mockup/template'
import { theme } from '../../styles/theme'
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
      slotProps={{
        column_items: 1,
        column_padding: 0,
        layout: selected_layout,
        slot: items_left
      }}
    />
  )
}