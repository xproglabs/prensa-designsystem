import { get } from 'lodash'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { TEASER_FEATURED, TEASER_FEATURED_RELATED } from '../components/Teaser/configs'
import { theme } from '../styles/theme'
import Template from './Template7030'
import { data } from './Template7030.data'



export default {
  title: 'Templates',
  component: Template
}

export const DefaultComponent = () => {

  const items = data
  if (items && items.length < 3) return <pre>sem conteudo</pre>

  const slot70_items = [ items[0] ]
  const slot30_items = [ items[1], items[2] ]

  return (
    <ThemeProvider theme={theme}>
      <Template
        slot70={{
          column_items: 1,
          column_padding: '0px',
          layout: TEASER_FEATURED,
          slot: slot70_items,
        }}
        slot30={{
          column_items: 1,
          column_padding: 0,
          layout: TEASER_FEATURED_RELATED,
          slot: slot30_items
        }}
      />
    </ThemeProvider>
  )
}
