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
        amp={false}
        bio='Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br'
        imagePath='https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600'
        name='Aldecir Xavier'
      />
    </ThemeProvider>
  )
}

export const HojeEmDia = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorBio
        amp={false}
        bio='Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br'
        imagePath='https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600'
        name='Aldecir Xavier'
        title='Titulo da coluna'
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
        facebookUrl='https://google.com.br'
        instagramUrl='https://google.com.br'
        linkedinUrl='https://google.com.br'
        twitterUrl='https://google.com.br'
      />
    </ThemeProvider>
  )
}

