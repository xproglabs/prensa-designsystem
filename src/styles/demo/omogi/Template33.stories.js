import { SectionTitle } from 'components/Templates/styled.tsx'
import { Template33 as Template } from 'components/Templates/Template33'
import TemplateContainer from 'components/Templates/TemplateContainer'
import { get } from 'lodash'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { data } from './Template33.data'

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

export const Template33 = () => {

  //props
  const { items_left, items_center, items_right, link_url, sections, title } = data

  //layout
  const layout = get(theme, 'teasers.image_small_left')
  const section_props = get(layout, 'section', {})

  // title values
  const title_left = get(sections, 'left', '')
  const title_center = get(sections, 'center', '')
  const title_right = get(sections, 'right', '')
  // colors
  const parse_color = (value) => {
    switch (value) {
      case 'yellow':
        return 'editorial3'
      case 'blue':
        return 'editorial1'
      case 'black':
        return 'black'
      case 'green':
        return 'editorial5'
      case 'red':
        return 'editorial2'
      default:
        return 'primary1'
    }
  }
  const color_left = parse_color(get(sections, 'left_color', ''))
  const color_center = parse_color(get(sections, 'center_color', ''))
  const color_right = parse_color(get(sections, 'right_color', ''))

  const render_section_title = ({ color, title }) => (
    <SectionTitle color={color} path={''} {...section_props}>
      {title}
    </SectionTitle>
  )

  return (
    <TemplateContainer
      mb={[2, 2]}
      theme={theme}
    >
      {title &&
        <SectionTitle path={link_url} {...section_props}>
          {title}
        </SectionTitle>
      }
      <Template
        slotLeft={{
          color: color_left,
          column_items: 1,
          column_padding: 0,
          image_circle: false,
          layout: layout,
          section_title: render_section_title({
            color: color_left,
            title: title_left,
          }),
          slot: items_left
        }}
        slotCenter={{
          color: color_center,
          column_items: 1,
          column_padding: 0,
          image_circle: false,
          layout: layout,
          section_title: render_section_title({
            color: color_center,
            title: title_center
          }),
          slot: items_center
        }}
        slotRight={{
          color: color_right,
          column_items: 1,
          column_padding: 0,
          image_circle: false,
          layout: layout,
          section_title: render_section_title({
            color: color_right,
            title: title_right
          }),
          slot: items_right
        }}
      />
    </TemplateContainer>
  )
}