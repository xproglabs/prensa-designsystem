import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { SideMenu } from '../../../news'
import { Block, Button } from '../../../primitives'
import { SideMenuProps } from '../../../news/SideMenu/types'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

export default {
  title: 'News/SideMenu',
  component: SideMenu,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable components={{ SideMenu }} />
        </>
      )
    }
  }
}

const Template = (args) => {
  const [state, setState] = React.useState(false)
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['column', 'center', 'middle'], px: '$2', py: '$10' }}>
        <Button onClick={() => setState(true)}>
          Click to open SideMenu
        </Button>
        <SideMenu
          {...args}
          open={state}
          close={() => setState(false)}
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const Default: { args: Omit<SideMenuProps, 'close' | 'open'> } = Template.bind({})
Default.args = {
  innerSpace: 'lg',
  sections: {
    header: <div>header</div>,
    content: <div>content</div>,
    footer: <div>footer</div>
  },
  css: {
    header: {
      backgroundColor: '$basicWarning500',
      height: '$10'
    },
    content: {
      backgroundColor: '$basicWarning600',
      height: '$10'
    },
    footer: {
      backgroundColor: '$basicWarning700',
      height: '$10'
    }
  }
}