import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { IcMenu } from '../../icons/IcMenu'
import ChevronRight from '../AccordionEditorial/assets/ChevronRight'

export default {
  title: 'Icons',
  component: IcMenu,
}

export const Default = () => (
  <ThemeProvider theme={theme}>
    <IcMenu ml='20px'/>
    <ChevronRight/>
    <IcMenu width='32' height='32' color='primary1' />
    <ChevronRight width='32' height='32' color='editorial4' />
  </ThemeProvider>
)
