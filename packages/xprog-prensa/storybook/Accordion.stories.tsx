import React from 'react'

import { Block } from '../primitives/Block'
import { Accordion } from '../primitives/Accordion'
import { AccordionProps } from '../primitives/Accordion/props'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'Primitives/Accordion' }

const Template = (args) => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['column', 'center', 'middle'], height: '100vh', px: '$2' }}>
        <Accordion {...args} />
      </Block>
    </PrensaThemeProvider>
  )
}

export const Default: { args: AccordionProps } = Template.bind({})
Default.args = {
  items: [
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
}

export const Sizes: { args: AccordionProps } = Template.bind({})
Sizes.args = {
  size: {
    '@initial': 'fullWidth',
    '@sm': 'sm',
    '@md': 'md',
    '@lg': 'lg',
  },
  items: [
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
}

export const Customized: { args: AccordionProps } = Template.bind({})
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
  items: [
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
}