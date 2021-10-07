import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import Copyright from '../Copyright'

export default {
  title: 'Copyright',
  component: Copyright,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Copyright
        textCopyright='© Copyright 2021'
        textCompany='Empresa'
        textRights='Todos os direitos reservados.'
        textAtex='Distribuído por'
        textXprog='Desenvolvido por'
      />
    </ThemeProvider>
  )
}