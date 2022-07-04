import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import { Notice } from '../Notice'

export default {
  title: 'Notice'
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Notice
        subject='EDITAL'
        subtitle='Veja os editais e balanços do dia 06 de abril de 2022.'
        title='Publicidade Legal - 06 de abril de 2022 | Ed 9244'
        buttonProps={{
          color: 'neutral2',
          fontSize: '10',
          fontWeight: 700,
        }}
        containerProps={{
          b: '1px',
          bgColor: 'white',
          borderColor: 'neutral9'
        }}
        subjectProps={{
          fontSize: '12px',
          fontWeight: 700,
          mb: 1
        }}
        subtitleProps={{
          color: 'neutral2',
          fontSize: '12px',
          fontWeight: 400,
          mb: 2,
          lg: {
            mb: '0px'
          }
        }}
        titleProps={{
          color: 'neutral2',
          fontSize: '20px',
          fontWeight: 700,
          mb: 1
        }}
      />
    </ThemeProvider>
  )
}
