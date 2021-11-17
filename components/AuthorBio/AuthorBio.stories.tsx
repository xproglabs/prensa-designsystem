import { AuthorBio } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'AuthorBio'
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorBio
        bio='Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br'
        name='Aldecir Xavier'
      />
    </ThemeProvider>
  )
}

export const HojeEmDia = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorBio
        bio='Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br'
        name='Aldecir Xavier'
        bioProps={{
          color: 'neutral2',
          fontSize: '12px',
          fontWeight: 400
        }}
        nameProps={{
          color: 'neutral2',
          fontSize: '18px',
          fontWeight: 700
        }}
        containerProps={{
          b: '1px',
          bgColor: 'white',
          borderColor: 'neutral9'
        }}
        titleProps={{
          color: 'neutral2',
          fontSize: '18px',
          fontWeight: 700,
          mb: 1
        }}
      />
    </ThemeProvider>
  )
}

