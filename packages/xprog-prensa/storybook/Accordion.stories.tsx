import React from 'react'

import { Block } from '../primitives/Block'
import { Accordion } from '../primitives/Accordion'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'Primitives/Accordion' }

const SideMenuTemplate = (args) => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['column', 'center', 'middle'], height: '100vh', px: '$2' }}>
        <Accordion {...args} />
      </Block>
    </PrensaThemeProvider>
  )
}

const defaultItems = [
  {
    id: 'foxOne',
    title: 'Fox one',
    expanded: false,
    children: <pre>The quick brown fox</pre>
  },
  {
    id: 'foxTwo',
    title: 'Fox two',
    expanded: false,
    children: <pre>The quick brown fox 2</pre>
  }
]

export const Default = SideMenuTemplate.bind({})
Default.args = {
  items: defaultItems
}

export const Sizes = SideMenuTemplate.bind({})
Sizes.args = {
  size: {
    '@initial': 'fullWidth',
    '@sm': 'sm',
    '@md': 'md',
    '@lg': 'lg',
  },
  items: defaultItems
}

export const Customized = SideMenuTemplate.bind({})
Customized.args = {
  css: {
    accordionItem: {
      accordionButton: {
        button: {
          backgroundColor: 'neutral4'
        }
      },
      accordionContent: {
        backgroundColor: '$neutral4'
      }
    }
  },
  items: defaultItems
}