import React from 'react'

import { Block, Button, Drawer } from '../primitives'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'Primitives/Drawer' }

const SideMenuTemplate = (args) => {
  const [state, setState] = React.useState(true)
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['column', 'center', 'middle'], height: '100vh' }}>
        <Button onClick={() => setState(true)}>
          Click me
        </Button>
        <Drawer {...args} open={state} close={() => setState(false)}>
          {args.children}
        </Drawer>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Default = SideMenuTemplate.bind({})
Default.args = {
  children: 'This component in default state will grow accordingly with his content'
}

export const Size = SideMenuTemplate.bind({})
Size.args = {
  children: 'SideMenu with size "md" and innerSpace "md" defined',
  innerSpace: 'md',
  size: 'md'
}

export const Customized = SideMenuTemplate.bind({})
Customized.args = {
  children: 'SideMenu with customizations using theme tokens',
  css: {
    content: {
      backgroundColor: '$basicSuccess500',
      width: '$sideMenu$sizeFullwidth',
      '@md': { width: '$sideMenu$sizeLg' }
    },
    spacer: {
      padding: '$sideMenu$innerSpaceSm'
    }
  }
}

export const CustomizedWithTokens = SideMenuTemplate.bind({})
CustomizedWithTokens.args = {
  children: 'SideMenu with customizations using theme tokens',
  innerSpace: 'lg',
  size: 'lg',
  css: {
    content: {
      width: '$sideMenu$sizeFullwidth',
      '@md': { width: '$sideMenu$sizeLg' }
    } 
  }
}

export const CustomizedWithValues = SideMenuTemplate.bind({})
CustomizedWithValues.args = {
  children: 'SideMenu with customizations using aleatory values',
  css: {
    content: {
      backgroundColor: '#05299E',
      color: '#FFFFFF',
      width: '280px',
      '@md': { width: '380px' }
    },
    spacer: {
      padding: '60px'
    }
  }
}