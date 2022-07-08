//@ts-nocheck
import React from 'react'
import { ThemeProvider } from 'styled-components'

import AccordionEditorial from '../../components/AccordionEditorial'
import { theme } from '../theme'
import data from './data.json'

export default {
  title: 'AccordionEditorial',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const AccordionWeb = () => {
  return (
    <AccordionEditorial 
      amp={false}
      items={data}
      title='teste'
      titleProps={{ color: 'product1' }}
      groupTitleProps={{ color: 'product2', pl: '16px' }}
      groupSubItemProps={{ color: 'neutral2', fontSize: '20px' }}
      menuItemProps={{ pl: '32px' }}
      color='primary1'
    />
  )
}

export const AccordionAmp = () => {
  return (
    <AccordionEditorial 
      amp={true}
      items={data}
      title='teste'
      titleProps={{ color: 'product1' }}
      groupTitleProps={{ color: 'product2', pl: '16px' }}
      groupSubItemProps={{ color: 'neutral2', fontSize: '20px' }}
      menuItemProps={{ pl: '32px' }}
      color='primary1'
    />
  )
}