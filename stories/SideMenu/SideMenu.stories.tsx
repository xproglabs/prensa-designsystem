import { AccordionEditorial, Button, SideMenu } from 'prensa'
import React, { useState } from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Block from '../../components/NewBlock'
import dataMock from './sidemenu_datamodel.json'

export default {
  title: 'Menu Lateral',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const SideMenuWeb = () => {
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setMenu(true)
  }
  const handleClose = () => {
    setMenu(false)
  }

  return (
    <React.Fragment>
      <Block
        align='row'
        alignx='center'
        aligny='middle'
        height='250px'
      >
        <Button onClick={handleOpen}>
          Abrir menu lateral
        </Button>
      </Block>
      <SideMenu
        amp={false}
        close={handleClose}
        open={menu}
      >
        <AccordionEditorial
          amp={false}
          items={dataMock}
          title='teste'
          titleProps={{ color: 'product1' }}
          groupTitleProps={{ color: 'product2', pl: '16px' }}
          groupSubItemProps={{ color: 'neutral2', fontSize: '20px' }}
          menuItemProps={{ pl: '32px' }}
          color='primary1'
        />
      </SideMenu>
    </React.Fragment>
  )
}

export const SideMenuAmp = () => {
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setMenu(true)
  }
  const handleClose = () => {
    setMenu(false)
  }

  return (
    <React.Fragment>
      <Block
        align='row'
        alignx='center'
        aligny='middle'
        height='250px'
      >
        <Button
          onClick={handleOpen}
          color='secondary1'
        >
          Abrir menu lateral
        </Button>
      </Block>
      <SideMenu
        amp={true}
        close={handleClose}
        open={menu}
      >
        <AccordionEditorial
          amp={true}
          items={dataMock}
          title='teste'
          titleProps={{ color: 'product1' }}
          groupTitleProps={{ color: 'product2', pl: '16px' }}
          groupSubItemProps={{ color: 'neutral2', fontSize: '20px' }}
          menuItemProps={{ pl: '32px' }}
          color='primary1'
        />
      </SideMenu>
    </React.Fragment>
  )
}