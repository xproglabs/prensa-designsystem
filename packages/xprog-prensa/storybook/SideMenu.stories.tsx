import React from 'react'

import { Block } from '../primitives/Block'
import { Button } from '../primitives/Button'
import { SideMenu } from '../news/SideMenu/index'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'News/SideMenu' }

const SideMenuTemplate = (args) => {
  const [state, setState] = React.useState(false)
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['column', 'center', 'middle'], height: '100vh' }}>
        <Button onClick={() => setState(true)}>
          Click me
        </Button>
        <SideMenu {...args} open={state} close={() => setState(false)}>
          The quick brown fox jumps over the lazy dog
        </SideMenu>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Default = SideMenuTemplate.bind({})
export const Customized = SideMenuTemplate.bind({})
Customized.args = {
  css: {
    content: {
      width: '$sideMenu$sizeFullwidth',
      '@md': { width: '$sideMenu$sizeMd' }
    }
  },
  innerSpace: 'md',
}