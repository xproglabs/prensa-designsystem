import { AccordionEditorial, Block, Button, SideMenu } from 'prensa'
import React, { useState } from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import dataMock from './sidemenu_datamodel.json'

export default {
  title: 'Menu Lateral'
}

export const Default = () => {
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setMenu(true)
  }
  const handleClose = () => {
    setMenu(false)
  }

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}