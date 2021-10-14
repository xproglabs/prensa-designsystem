import { SectionTitle } from 'components/Templates/styled.tsx'
import { Template100 as Template } from 'components/Templates/Template100'
import TemplateContainer from 'components/Templates/TemplateContainer'
import { get } from 'lodash'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { data } from './Template100.data'

export default {
  title: 'Templates/OMogi',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Template100 = () => {
  const layout = get(theme, 'teasers')
  const { items, link_url, title } = data
  // get selected layout by number of items
  const get_selected_layout = () => {
    switch (items.length) {
      case 0:
      case 1:
        return layout.image_top
      case 2:
        return layout.image_two
      case 3:
        return layout.image_three
      case 4:
        return layout.image_four
      default:
        return layout.image_carousel
    }
  }

  const selected_layout = get_selected_layout()
  const section_props = get(selected_layout, 'section', {})
  const config_carousel = {
    enabled: selected_layout === layout.teaser_image_carousel,
    height: get(layout, 'teaser_image_carousel.carousel.height', 0),
    querie: theme.queries.lg
  }

  const Component = data => (
    <pre
      style={{
        minWidth: '50px',
        minHeight: '50px',
        backgroundColor: 'blue'
      }}
    >
      {data.children}
    </pre>  
  )

  return (
    <TemplateContainer
      mb={[2, 2]}
      theme={theme}
    >
      {title &&
        <SectionTitle
          path={link_url}
          {...section_props}
        >
          {title}
        </SectionTitle>
      }
      <Template
        carousel={config_carousel}
        slot100={{
          column_items: items.length > 4 ? 4 : items.length,
          column_padding: items.length - 1,
          layout: selected_layout,
          slot: items,
          spaceA: <Component>left</Component>,
          spaceB: <Component>right</Component>
        }}
      />
    </TemplateContainer>
  )
}