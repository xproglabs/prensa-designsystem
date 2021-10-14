import { Template7030 } from 'components/Templates/Template7030'
import { get } from 'lodash'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { data } from './Template7030.data'

export default {
  title: 'Templates/OMogi',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
}

export const Template_7030 = () => {

  const items = data
  const layout = get(theme, 'teasers', {})
  if (items && items.length < 3) return <pre>sem conteudo</pre>

  const slot70_items = [ items[0] ]
  const slot30_items = [ items[1], items[2] ]

  return (
    <Template7030
      slot70={{
        column_items: 1,
        column_padding: '0px',
        layout: layout.featured,
        slot: slot70_items,
      }}
      slot30={{
        column_items: 1,
        column_padding: 0,
        layout: layout.featured_related,
        slot: slot30_items
      }}
    />
  )
}

export const Template_7030_Image = () => {

  const items = data
  const layout = get(theme, 'teasers', {})
  if (items && items.length < 3) return <pre>sem conteudo</pre>

  const slot70_items = [ items[0] ]
  const slot30_items = [ items[1], items[2] ]

  return (
    <Template7030
      slot70={{
        column_items: 1,
        column_padding: '0px',
        layout: layout.image_featured,
        slot: slot70_items,
      }}
      slot30={{
        column_items: 1,
        column_padding: 0,
        layout: layout.featured_related,
        slot: slot30_items
      }}
    />
  )
}