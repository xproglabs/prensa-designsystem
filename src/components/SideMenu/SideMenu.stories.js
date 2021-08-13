import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import Accordion from '../AccordionEditorial'
import SideMenu from './index'
import dataMock from './sidemenu_datamodel.json'

export default {
  title: 'Menu Lateral',
  component: SideMenu,
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
      <div>
        <button onClick={handleOpen}>Abrir menu</button>
        <SideMenu backgroundColor='neutral11' open={menu} close={handleClose} menuAnchor='right'>
          <Accordion
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
      </div>
    </ThemeProvider>
  )
}